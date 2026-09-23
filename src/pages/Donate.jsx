import { useState } from "react";

function Donate() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState(false);

  const amounts = ["25", "50", "100"];

  const handleDonate = () => {
    setMessage(true);
  };

  return (
    <div className="bg-slate-50">

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-emerald-950 text-white py-20 md:py-24">

        {/* Decorative background */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-bold animate-[fadeIn_0.7s_ease-out]">
            <span>♥</span>
            Donation Portal
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight animate-[heroIn_0.8s_ease-out]">
            Support Our
            <span className="block text-emerald-400 mt-2">
              Humanitarian Response
            </span>
          </h1>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400"></div>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Your support helps strengthen inclusive humanitarian and
            development initiatives for communities in need.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              Inclusive Development
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              Community Support
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
              Humanitarian Response
            </span>
          </div>
        </div>
      </section>


      {/* ==================== DONATION AREA ==================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="max-w-3xl mx-auto">

          {!message ? (

            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl">

              {/* Top accent */}
              <div className="h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-400 to-amber-400"></div>

              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-50 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-50 rounded-full blur-2xl"></div>

              <div className="relative p-7 md:p-10 text-center">

                {/* Icon */}
                <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl shadow-sm animate-[iconFloat_3s_ease-in-out_infinite]">
                  ♥
                </div>

                <span className="inline-block mt-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Make a Difference
                </span>

                <h2 className="mt-2 text-3xl md:text-4xl font-black text-emerald-950">
                  Thank You for Your Support
                </h2>

                <p className="mt-4 text-gray-600 leading-7 max-w-2xl mx-auto">
                  We are finalizing our Telebirr and bank payment integration
                  to provide a seamless donation experience.
                </p>


                {/* Amount Selection */}
                <div className="mt-10">

                  <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                    Select an Amount
                  </p>

                  <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto">

                    {amounts.map((item, index) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setAmount(item)}
                        className={`
                          relative overflow-hidden
                          py-4 rounded-xl
                          border-2
                          font-black
                          transition-all duration-300
                          hover:-translate-y-1
                          animate-[amountIn_0.5s_ease-out_both]
                          ${
                            amount === item
                              ? "border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                              : "border-gray-200 bg-white text-slate-700 hover:border-emerald-500 hover:text-emerald-700"
                          }
                        `}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        ${item}

                        {amount === item && (
                          <span className="absolute top-1 right-2 text-xs">
                            ✓
                          </span>
                        )}
                      </button>
                    ))}

                  </div>
                </div>


                {/* Donate Button */}
                <button
                  type="button"
                  onClick={handleDonate}
                  disabled={!amount}
                  className="
                    mt-8
                    w-full max-w-md mx-auto
                    block
                    bg-emerald-600
                    hover:bg-emerald-700
                    disabled:bg-gray-300
                    disabled:cursor-not-allowed
                    text-white
                    py-4
                    rounded-xl
                    font-black
                    shadow-md
                    hover:shadow-xl
                    hover:shadow-emerald-200
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >
                  Donate {amount ? `$${amount}` : ""} / ይለግሱ
                </button>

                <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-400">
                  <span>🔒</span>
                  Payment integration will be available soon.
                </div>

              </div>
            </div>

          ) : (

            /* ==================== SUCCESS MESSAGE ==================== */
            <div className="relative overflow-hidden rounded-3xl bg-emerald-50 border border-emerald-200 p-8 md:p-10 text-center shadow-lg animate-[successIn_0.5s_ease-out]">

              <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-100 rounded-full blur-2xl"></div>

              <div className="relative">

                <div className="mx-auto w-16 h-16 rounded-full bg-white border border-emerald-200 flex items-center justify-center text-3xl shadow-sm">
                  ✓
                </div>

                <span className="inline-block mt-5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                  Donation Request
                </span>

                <h2 className="mt-2 text-3xl md:text-4xl font-black text-emerald-950">
                  Thank You for Your Support!
                </h2>

                <p className="mt-4 text-emerald-800 leading-7 max-w-xl mx-auto">
                  You selected a donation of{" "}
                  <strong className="text-emerald-950">
                    ${amount}
                  </strong>
                  . Telebirr and bank payment integration is currently being
                  finalized.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setMessage(false);
                    setAmount("");
                  }}
                  className="
                    mt-7
                    px-6 py-3
                    rounded-xl
                    bg-white
                    border border-emerald-200
                    text-emerald-700
                    font-bold
                    hover:bg-emerald-100
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >
                  ← Choose Another Amount
                </button>

              </div>
            </div>
          )}

        </div>
      </section>


      {/* ==================== SUPPORT MESSAGE ==================== */}
      <section className="relative overflow-hidden bg-white border-y border-gray-100">

        <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-50 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Your Support Matters
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-black text-emerald-950">
            Every Contribution Matters
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>

          <p className="mt-5 text-gray-600 leading-7 max-w-2xl mx-auto">
            Your support can contribute to PIDO's humanitarian and development
            work with vulnerable and underserved communities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold">
              Community Empowerment
            </span>

            <span className="px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-bold">
              Inclusive Opportunities
            </span>

            <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold">
              Sustainable Change
            </span>
          </div>

        </div>
      </section>


      {/* ==================== ANIMATIONS ==================== */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
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
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
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