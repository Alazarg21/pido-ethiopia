import { useState } from "react";

function Donate() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const amounts = ["25", "50", "100"];

  const handleDonate = () => {
    if (!amount) return;
    setError("");
    setMessage(true);
  };

  const handleChapaPayment = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/.netlify/functions/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: donorName.trim(),
          email: donorEmail.trim(),
          amount: Number(amount),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.checkout_url) {
        throw new Error(data.error || "Unable to start payment. Please try again.");
      }

      // The Netlify Function validates the returned URL before sending it here.
      window.location.assign(data.checkout_url);
    } catch (err) {
      setError(err.message || "Payment could not be started. Please try again.");
      setLoading(false);
    }
  };

  const chooseAnotherAmount = () => {
    setMessage(false);
    setAmount("");
    setDonorName("");
    setDonorEmail("");
    setError("");
  };

  return (
    <div className="bg-slate-50">
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-emerald-950 py-20 text-white md:py-24">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex animate-[fadeIn_0.7s_ease-out] items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-300">
            <span>♥️</span>
            Donation Portal
          </span>

          <h1 className="mt-6 animate-[heroIn_0.8s_ease-out] text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
            Support Our
            <span className="mt-2 block text-emerald-400">
              Humanitarian Response
            </span>
          </h1>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            Your support helps strengthen inclusive humanitarian and
            development initiatives for communities in need.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300">
              Inclusive Development
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300">
              Community Support
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300">
              Humanitarian Response
            </span>
          </div>
        </div>
      </section>

      {/* ==================== DONATION AREA ==================== */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {!message ? (
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl">
              <div className="h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-400 to-amber-400" />
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-50 blur-2xl" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-amber-50 blur-2xl" />

              <div className="relative p-7 text-center md:p-10">
                <div className="mx-auto flex h-16 w-16 animate-[iconFloat_3s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-emerald-100 text-3xl text-emerald-600 shadow-sm">
                  ♥️
                </div>

                <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Make a Difference
                </span>

                <h2 className="mt-2 text-3xl font-black text-emerald-950 md:text-4xl">
                  Thank You for Your Support
                </h2>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                  Choose a donation amount to continue to Chapa's secure
                  checkout. Your contribution supports PIDO's humanitarian and
                  development work.
                </p>

                <div className="mt-10">
                  <p className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                    Select an Amount (ETB)
                  </p>

                  <div className="mx-auto grid max-w-md grid-cols-3 gap-3 md:gap-4">
                    {amounts.map((item, index) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setAmount(item)}
                        aria-pressed={amount === item}
                        className={`relative animate-[amountIn_0.5s_ease-out_both] overflow-hidden rounded-xl border-2 py-4 font-black transition-all duration-300 hover:-translate-y-1 ${
                          amount === item
                            ? "border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                            : "border-gray-200 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700"
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {Number(item).toLocaleString()} ETB
                        {amount === item && (
                          <span className="absolute right-2 top-1 text-xs">
                            ✓
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleDonate}
                  disabled={!amount}
                  className="mx-auto mt-8 block w-full max-w-md rounded-xl bg-emerald-600 py-4 font-black text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-200 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
                >
                  {amount
                    ? `Continue with ${Number(amount).toLocaleString()} ETB`
                    : "Select an Amount to Donate"}{" "}
                  / ይለግሱ
                </button>

                <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-400">
                  <span>🔒</span>
                  Secure checkout powered by Chapa
                </div>
              </div>
            </div>
          ) : (
            <div className="relative animate-[successIn_0.5s_ease-out] overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-lg md:p-10">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-100 blur-2xl" />

              <div className="relative">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 bg-white text-3xl shadow-sm">
                  ♥️
                </div>

                <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Donation Details
                </span>

                <h2 className="mt-2 text-3xl font-black text-emerald-950 md:text-4xl">
                  Complete Your Donation
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-emerald-800">
                  You selected a donation of{" "}
                  <strong className="text-emerald-950">
                    {Number(amount).toLocaleString()} ETB
                  </strong>
                  . Enter your details below to continue to Chapa.
                </p>

                <form
                  onSubmit={handleChapaPayment}
                  className="mx-auto mt-6 max-w-md space-y-4 text-left"
                >
                  <label className="block">
                    <span className="mb-1 block font-semibold text-emerald-950">
                      Full name
                    </span>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(event) => setDonorName(event.target.value)}
                      autoComplete="name"
                      maxLength={120}
                      required
                      className="w-full rounded-xl border border-emerald-200 bg-white p-3 outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Enter your full name"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1 block font-semibold text-emerald-950">
                      Email address
                    </span>
                    <input
                      type="email"
                      value={donorEmail}
                      onChange={(event) => setDonorEmail(event.target.value)}
                      autoComplete="email"
                      maxLength={254}
                      required
                      className="w-full rounded-xl border border-emerald-200 bg-white p-3 outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="you@example.com"
                    />
                  </label>

                  {error && (
                    <p
                      role="alert"
                      className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-emerald-700 px-6 py-3 font-bold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Connecting to Chapa..." : "Continue to Payment"}
                  </button>
                </form>

                <button
                  type="button"
                  disabled={loading}
                  onClick={chooseAnotherAmount}
                  className="mt-7 rounded-xl border border-emerald-200 bg-white px-6 py-3 font-bold text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100 disabled:opacity-50"
                >
                  ← Choose Another Amount
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================== SUPPORT MESSAGE ==================== */}
      <section className="relative overflow-hidden border-y border-gray-100 bg-white">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-amber-50 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Your Support Matters
          </span>

          <h2 className="mt-3 text-3xl font-black text-emerald-950 md:text-4xl">
            Every Contribution Matters
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400" />

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Your support can contribute to PIDO's humanitarian and development
            work with vulnerable and underserved communities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              Community Empowerment
            </span>
            <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
              Inclusive Opportunities
            </span>
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              Sustainable Change
            </span>
          </div>
        </div>
      </section>

      {/* ==================== ANIMATIONS ==================== */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes heroIn {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes iconFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }

          @keyframes amountIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes successIn {
            from {
              opacity: 0;
              transform: scale(0.96) translateY(15px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Donate;
