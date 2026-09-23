function Vision() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden bg-emerald-950 text-white p-7 md:p-10 rounded-3xl shadow-xl">

        {/* Decorative background */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>

        <div className="relative">

          {/* HEADER */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Our Direction
            </span>

            <h2 className="text-3xl md:text-4xl font-black mt-5">
              Vision & Mission
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400"></div>
          </div>

          {/* VISION & MISSION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* VISION */}
            <div className="group relative overflow-hidden p-6 md:p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500">

              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-2xl font-bold group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  ◉
                </div>

                <span className="text-xs font-black text-emerald-400/50">
                  01
                </span>
              </div>

              <h3 className="text-emerald-400 font-bold uppercase text-xs tracking-[0.2em] mt-6 mb-3">
                Our Vision
              </h3>

              <p className="text-gray-200 leading-7">
                A world where every individual, regardless of disability or
                vulnerability, has access to opportunities, resources, and
                services to lead a dignified life.
              </p>

              <div className="mt-5 h-1 w-10 rounded-full bg-emerald-500 group-hover:w-20 transition-all duration-500"></div>
            </div>

            {/* MISSION */}
            <div className="group relative overflow-hidden p-6 md:p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500">

              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center text-2xl font-bold group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  ↗
                </div>

                <span className="text-xs font-black text-amber-400/50">
                  02
                </span>
              </div>

              <h3 className="text-amber-400 font-bold uppercase text-xs tracking-[0.2em] mt-6 mb-3">
                Our Mission
              </h3>

              <p className="text-gray-200 leading-7">
                To promote equality and empower vulnerable individuals by
                building inclusive systems across education, health, nutrition
                and livelihoods.
              </p>

              <div className="mt-5 h-1 w-10 rounded-full bg-amber-400 group-hover:w-20 transition-all duration-500"></div>
            </div>

          </div>

          {/* BOTTOM STATEMENT */}
          <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
            <p className="text-sm text-gray-300 leading-6">
              <span className="font-bold text-emerald-400">
                Inclusive vision. Meaningful action.
              </span>{" "}
              PIDO works toward creating opportunities and systems that enable
              vulnerable individuals and communities to participate and thrive.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Vision;
