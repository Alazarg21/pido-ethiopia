
export default async (request) => {
  // Only allow POST requests
  if (request.method !== "POST") {
    return Response.json(
      { error: "Method not allowed" },
      {
        status: 405,
        headers: { Allow: "POST" }
      }
    );
  }

  const secretKey = process.env.CHAPA_SECRET_KEY;
  const siteUrl = process.env.SITE_URL;

  // Check required environment variables
  if (!secretKey || !siteUrl) {
    console.error(
      "Missing CHAPA_SECRET_KEY or SITE_URL environment variable"
    );

    return Response.json(
      { error: "Payment service is not configured." },
      { status: 500 }
    );
  }

  try {
    // Read request body
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const amount = Number(body.amount);

    // Validate donor information and amount
    if (
      !name ||
      name.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !Number.isSafeInteger(amount) ||
      amount < 1 ||
      amount > 1000000
    ) {
      return Response.json(
        {
          error:
            "Enter a valid name, email, and whole-number donation amount."
        },
        { status: 400 }
      );
    }

    // Split donor name
    const names = name.split(/\s+/);
    const firstName = names.shift();
    const lastName = names.join(" ") || "Donor";

    // Generate a unique transaction reference
    const reference =
      "PIDO_DON_" +
      crypto.randomUUID().replaceAll("-", "");

    // Build the return URL
    let returnUrl;

    try {
      const baseUrl = new URL(siteUrl);

      if (baseUrl.protocol !== "https:" &&
          baseUrl.hostname !== "localhost") {
        throw new Error("SITE_URL must use HTTPS");
      }

      returnUrl = new URL("/", baseUrl);
      returnUrl.searchParams.set("payment", "return");
      returnUrl.searchParams.set("reference", reference);
    } catch {
      console.error("Invalid SITE_URL configuration");

      return Response.json(
        { error: "Payment service is not configured." },
        { status: 500 }
      );
    }

    // Initialize Chapa hosted checkout
    const chapaResponse = await fetch(
      "https://api.chapa.global/v2/payments/hosted",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          amount: amount,
          currency: "ETB",
          merchant_reference: reference,
          customer: {
            first_name: firstName,
            last_name: lastName,
            email: email
          },
          return_url: returnUrl.toString(),
          meta: {
            organization: "PIDO Ethiopia",
            purpose: "Donation"
          }
        })
      }
    );

    // Safely parse Chapa's response
    let result;

    try {
      result = await chapaResponse.json();
    } catch {
      result = {};
    }

    // Handle Chapa API errors
    if (!chapaResponse.ok) {
      console.error(
        "Chapa checkout error:",
        chapaResponse.status,
        result?.message ??
          result?.error ??
          "Unknown error"
      );

      return Response.json(
        {
          error:
            "Could not create checkout. Please try again."
        },
        { status: 502 }
      );
    }

    // Validate the returned checkout URL
    const checkoutUrl = result?.data?.checkout_url;
    let parsedUrl = null;

    try {
      parsedUrl = new URL(checkoutUrl);
    } catch {
      parsedUrl = null;
    }

    const allowedHosts = [
      "checkout.chapa.global",
      "checkout.chapa.co"
    ];

    if (
      !parsedUrl ||
      parsedUrl.protocol !== "https:" ||
      !allowedHosts.includes(parsedUrl.hostname)
    ) {
      console.error(
        "Chapa returned an invalid checkout URL"
      );

      return Response.json(
        {
          error:
            "Chapa returned an invalid checkout URL."
        },
        { status: 502 }
      );
    }

    // Return checkout details to the frontend
    return Response.json({
      checkout_url: parsedUrl.href,
      reference: reference
    });

  } catch (error) {
    console.error(
      "Checkout initialization failed:",
      error?.message ?? error
    );

    return Response.json(
      {
        error:
          "Unable to start payment. Please try again."
      },
      { status: 500 }
    );
  }
};
