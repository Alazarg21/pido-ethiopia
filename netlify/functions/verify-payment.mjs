export default async (request) => {
  if (request.method !== "GET") {
    return Response.json(
      { error: "Method not allowed" },
      { status: 405, headers: { Allow: "GET" } }
    );
  }

  const secretKey = process.env.CHAPA_SECRET_KEY;

  if (!secretKey) {
    return Response.json(
      { error: "Payment service is not configured." },
      { status: 500 }
    );
  }

  try {
    const url = new URL(request.url);
    const reference = url.searchParams.get("reference")?.trim();

    // Only accept references created by the PIDO checkout function.
    if (!reference || !/^PIDO_DON_[a-f0-9]{32}$/i.test(reference)) {
      return Response.json(
        { error: "Invalid payment reference." },
        { status: 400 }
      );
    }

    const chapaResponse = await fetch(
      `https://api.chapa.global/v2/payments/${encodeURIComponent(reference)}/verify`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          Accept: "application/json",
        },
      }
    );

    const result = await chapaResponse.json();

    if (!chapaResponse.ok) {
      console.error(
        "Chapa verification error:",
        chapaResponse.status,
        result?.message || result?.error || "Unknown error"
      );

      return Response.json(
        { error: "Unable to verify payment right now." },
        { status: 502 }
      );
    }

    const payment = result?.data;
    const isPaid =
      result?.status === "success" &&
      payment?.status === "success" &&
      String(payment?.currency ?? "").toUpperCase() === "ETB";

    return Response.json({
      reference,
      verified: isPaid,
      status: isPaid ? "success" : payment?.status || "pending",
      message: isPaid
        ? "Payment verified successfully."
        : "Payment has not been confirmed as successful.",
    });
  } catch (error) {
    console.error("Payment verification failed:", error.message);

    return Response.json(
      { error: "Unable to verify payment. Please try again." },
      { status: 500 }
    );
  }
};