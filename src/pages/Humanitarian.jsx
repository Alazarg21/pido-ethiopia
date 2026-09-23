function Humanitarian() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
      <div className="relative overflow-hidden bg-white rounded-[2rem] border border-slate-100 shadow-xl">

        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-400" />

        {/* Decorative background */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative p-6 sm:p-8 md:p-10">

          {/* ================= HEADER ================= */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">

            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-3xl sm:text-4xl shadow-lg animate-[iconFloat_4s_ease-in-out_infinite]">
              🚑
            </div>

            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
                Humanitarian Response
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                Humanitarian Relief{" "}
                <span className="text-emerald-600">
                  & Disaster Risk Reduction
                </span>
              </h2>

              <div className="mt-3 w-20 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-amber-400" />
            </div>
          </div>


          {/* ================= DESCRIPTION ================= */}
          <div className="max-w-4xl mb-10">
            <p className="text-base sm:text-lg text-slate-600 leading-8">
              We provide timely humanitarian assistance while strengthening
              disaster preparedness, early warning, resilience, emergency
              response, and long-term recovery.
            </p>
          </div>


          {/* ================= FOCUS AREAS ================= */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our Focus Areas
            </span>

            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
              Responding today, preparing for tomorrow
            </h3>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Emergency Response */}
            <div className="group relative overflow-hidden rounded-2xl border-l-4 border-emerald-500 bg-slate-50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-[cardIn_0.5s_ease-out]">

              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black text-emerald-600">
                  01
                </span>

                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🚑
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Emergency Response
              </h4>

              <p className="mt-2 text-sm text-slate-600 leading-6">
                Providing timely assistance and support during emergencies.
              </p>

              <div className="mt-5 text-sm font-bold text-emerald-600">
                Learn more →
              </div>
            </div>


            {/* Disaster Preparedness */}
            <div className="group relative overflow-hidden rounded-2xl border-l-4 border-amber-400 bg-slate-50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-[cardIn_0.5s_ease-out_0.1s_both]">

              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black text-amber-600">
                  02
                </span>

                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🛡️
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                Disaster Preparedness
              </h4>

              <p className="mt-2 text-sm text-slate-600 leading-6">
                Strengthening readiness and capacity before disasters occur.
              </p>

              <div className="mt-5 text-sm font-bold text-amber-600">
                Learn more →
              </div>
            </div>


            {/* Early Warning */}
            <div className="group relative overflow-hidden rounded-2xl border-l-4 border-emerald-500 bg-slate-50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-[cardIn_0.5s_ease-out_0.2s_both]">

              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black text-emerald-600">
                  03
                </span>

                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  📢
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Early Warning
              </h4>

              <p className="mt-2 text-sm text-slate-600 leading-6">
                Supporting early identification and communication of risks.
              </p>

              <div className="mt-5 text-sm font-bold text-emerald-600">
                Learn more →
              </div>
            </div>


            {/* Resilience */}
            <div className="group relative overflow-hidden rounded-2xl border-l-4 border-amber-400 bg-slate-50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-[cardIn_0.5s_ease-out_0.3s_both]">

              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black text-amber-600">
                  04
                </span>

                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🌱
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                Community Resilience
              </h4>

              <p className="mt-2 text-sm text-slate-600 leading-6">
                Strengthening communities to cope with and recover from shocks.
              </p>

              <div className="mt-5 text-sm font-bold text-amber-600">
                Learn more →
              </div>
            </div>


            {/* Recovery */}
            <div className="group relative overflow-hidden rounded-2xl border-l-4 border-emerald-500 bg-slate-50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-[cardIn_0.5s_ease-out_0.4s_both]">

              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black text-emerald-600">
                  05
                </span>

                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🏘️
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Long-Term Recovery
              </h4>

              <p className="mt-2 text-sm text-slate-600 leading-6">
                Supporting communities as they recover and rebuild after crises.
              </p>

              <div className="mt-5 text-sm font-bold text-emerald-600">
                Learn more →
              </div>
            </div>


            {/* Humanitarian Assistance */}
            <div className="group relative overflow-hidden rounded-2xl border-l-4 border-amber-400 bg-slate-50 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-[cardIn_0.5s_ease-out_0.5s_both]">

              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black text-amber-600">
                  06
                </span>

                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  🤝
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                Humanitarian Assistance
              </h4>

              <p className="mt-2 text-sm text-slate-600 leading-6">
                Supporting vulnerable communities with timely humanitarian aid.
              </p>

              <div className="mt-5 text-sm font-bold text-amber-600">
                Learn more →
              </div>
            </div>

          </div>


          {/* ================= COMMITMENT ================= */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-emerald-50 border border-emerald-100 p-6 sm:p-8">

            <div className="flex gap-4 items-start">

              <div className="text-3xl flex-shrink-0">
                🕊️
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                  Our commitment
                </h3>

                <p className="text-slate-600 leading-7">
                  Strengthening communities to prepare for disasters,
                  respond effectively to emergencies, recover from crises,
                  and build resilience for the future.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* =========================
          ANIMATIONS
      ========================== */}
      <style>{`
        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Humanitarian;