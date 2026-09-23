function Values() {
  const values = [
    {
      title: "Integrity",
      text: "Transparency, accountability, honesty and ethical conduct.",
      icon: "✓",
    },
    {
      title: "Nurturing Potential",
      text: "Strengthening people and institutions through capacity building.",
      icon: "↗",
    },
    {
      title: "Compassion",
      text: "Serving everyone with dignity, empathy and respect.",
      icon: "♡",
    },
    {
      title: "Leadership for Change",
      text: "Empowering youth and persons with disabilities.",
      icon: "★",
    },
    {
      title: "Unity in Diversity",
      text: "Celebrating differences and promoting inclusion.",
      icon: "◎",
    },
    {
      title: "Sustainability",
      text: "Building long-term environmental and social impact.",
      icon: "♻",
    },
    {
      title: "Innovation",
      text: "Creative and evidence-based solutions.",
      icon: "✦",
    },
    {
      title: "Voice & Participation",
      text: "Ensuring marginalized communities participate in decisions.",
      icon: "◉",
    },
    {
      title: "Equity",
      text: "Promoting fairness and equal opportunity.",
      icon: "≡",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Main Container */}
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Believe In
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Core Values
          </h2>

          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="
                group
                relative
                p-6
                rounded-2xl
                border
                border-slate-200
                bg-white
                overflow-hidden

                transition-all
                duration-500
                ease-out

                hover:-translate-y-2
                hover:border-emerald-300
                hover:shadow-xl
              "
              style={{
                animation: `fadeUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              {/* Decorative background circle */}
              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  w-28
                  h-28
                  rounded-full
                  bg-emerald-50
                  opacity-0
                  group-hover:opacity-100
                  group-hover:scale-150
                  transition-all
                  duration-700
                "
              ></div>

              {/* Icon */}
              <div
                className="
                  relative
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-50
                  text-emerald-600
                  text-xl
                  font-bold
                  mb-5

                  transition-all
                  duration-500

                  group-hover:bg-emerald-600
                  group-hover:text-white
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                {value.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3
                  className="
                    font-bold
                    text-slate-900
                    text-xl
                    transition-colors
                    duration-300
                    group-hover:text-emerald-700
                  "
                >
                  {value.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-slate-600
                    leading-relaxed
                  "
                >
                  {value.text}
                </p>
              </div>

              {/* Bottom animated line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-emerald-600
                  rounded-full

                  group-hover:w-full

                  transition-all
                  duration-500
                "
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default Values;