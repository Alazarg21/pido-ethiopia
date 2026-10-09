export default async (request) => {
  if (request.method !== "POST") {
    return Response.json(
      { error: "Method not allowed" },
      { status: 405, headers: { Allow: "POST" } }
    );
  }

  const secretKey = process.env.CHAPA_SECRET_KEY;

  if (!secretKey) {
    console.error("CHAPA_SECRET_KEY is missing");
    return Response.json(
      { error: "Payment service is not configured." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const amount = Number(body.amount);

    if (
      !name ||
      name.length > 120 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !Number.isFinite(amount) ||
      amount < 1 ||
      amount > 1000000
    ) {
      return Response.json(
        { error: "Enter a valid name, email, and donation amount." },
        { status: 400 }
      );
    }

    const names = name.split(/\s+/);
    const firstName = names.shift();
    const lastName = names.join(" ") || "Donor";

    const reference =
      "PIDO_DON_" + crypto.randomUUID().replaceAll("-", "");

    const siteUrl = process.env.SITE_URL;

    if (!siteUrl) {
      console.error("SITE_URL is missing");
      return Response.json(
        { error: "Payment service is not configured." },
        { status: 500 }
      );
    }

    const returnUrl = new URL("/", siteUrl);
    returnUrl.searchParams.set("payment", "return");
    returnUrl.searchParams.set("reference", reference);

    const chapaResponse = await fetch(
      "https://api.chapa.global/v2/payments/hosted",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          amount: amount.toFixed(2),
          currency: "ETB",
          merchant_reference: reference,
          customer: {
            first_name: firstName,
            last_name: lastName,
            email,
          },
          // Confirm return_url support with your Chapa account/API.
          return_url: returnUrl.toString(),
          meta: {
            organization: "PIDO Ethiopia",
            purpose: "Donation",
          },
        }),
      }
    );

    const result = await chapaResponse.json();

    if (!chapaResponse.ok) {
      console.error(
        "Chapa checkout error:",
        chapaResponse.status,
        result?.message ?? result?.error ?? "Unknown error"
      );

      return Response.json(
        { error: "Could not create checkout. Please try again." },
        { status: 502 }
      );
    }

    const checkoutUrl = result?.data?.checkout_url;

    let parsedUrl;
    try {
      parsedUrl = new URL(checkoutUrl);
    } catch {
      parsedUrl = null;
    }

    if (
      !parsedUrl ||
      parsedUrl.protocol !== "https:" ||
      !["checkout.chapa.global", "checkout.chapa.co"].includes(
        parsedUrl.hostname
      )
    ) {
      return Response.json(
        { error: "Chapa returned an invalid checkout URL." },
        { status: 502 }
      );
    }

    return Response.json({
      checkout_url: parsedUrl.href,
      reference,
    });
  } catch (error) {
    console.error("Checkout initialization failed:", error?.message ?? error);

    return Response.json(
      { error: "Unable to start payment. Please try again." },
      { status: 500 }
    );
  }
};