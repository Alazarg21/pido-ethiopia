function History() {
  const timeline = [
    {
      title: "Establishment & Strategy Mapping",
      text: "PIDO was founded by senior professionals with multidisciplinary experience in humanitarian response, development programming, public health, nutrition, protection, livelihoods, and community-based intervention.",
      color: "emerald",
      icon: "01",
    },
    {
      title: "Regional Hub Expansion",
      text: "PIDO develops emergency response and recovery initiatives to support vulnerable communities and hard-to-reach areas.",
      color: "amber",
      icon: "02",
    },
  ];

  const colors = {
    emerald: {
      dot: "bg-emerald-600",
      dotRing: "ring-emerald-100",
      number: "text-emerald-600",
      title: "group-hover:text-emerald-700",
    },

    amber: {
      dot: "bg-amber-500",
      dotRing: "ring-amber-100",
      number: "text-amber-600",
      title: "group-hover:text-amber-700",
    },
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-50/70 rounded-full blur-3xl"></div>

        {/* HEADER */}
        <div className="relative mb-10">

          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Our Journey
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
            Our Operational Timeline
          </h2>

          <div className="mt-4 h-1 w-14 bg-emerald-600 rounded-full"></div>

          <p className="mt-4 max-w-2xl text-gray-600 leading-relaxed">
            A brief look at the development of PIDO and its continuing
            commitment to supporting communities and creating sustainable
            change.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical timeline line */}
          <div
            className="
              absolute
              left-[11px]
              top-3
              bottom-3
              w-[3px]
              rounded-full
              bg-gradient-to-b
              from-emerald-500
              via-amber-400
              to-emerald-300
            "
          ></div>

          <div className="space-y-10">

            {timeline.map((item, index) => {
              const c = colors[item.color];

              return (
                <div
                  key={item.title}
                  className="
                    group
                    relative
                    pl-10
                    animate-[timelineIn_0.7s_ease-out_both]
                  "
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >

                  {/* Timeline dot */}
                  <div
                    className={`
                      absolute
                      left-0
                      top-1
                      w-6
                      h-6
                      rounded-full
                      ${c.dot}
                      border-4
                      border-white
                      ring-4
                      ${c.dotRing}
                      shadow-md
                      group-hover:scale-125
                      transition-transform
                      duration-300
                    `}
                  ></div>

                  {/* Content card */}
                  <div
                    className="
                      bg-gray-50/60
                      hover:bg-white
                      border
                      border-gray-100
                      rounded-2xl
                      p-5
                      md:p-6
                      shadow-sm
                      hover:shadow-lg
                      transition-all
                      duration-500
                      hover:-translate-y-1
                    "
                  >

                    {/* Number */}
                    <div className="flex items-center gap-3 mb-3">

                      <span
                        className={`
                          text-sm
                          font-black
                          ${c.number}
                        `}
                      >
                        {item.icon}
                      </span>

                      <div className="h-px flex-1 bg-gray-200"></div>

                    </div>

                    {/* Title */}
                    <h4
                      className={`
                        text-lg
                        md:text-xl
                        font-bold
                        text-slate-900
                        ${c.title}
                        transition-colors
                        duration-300
                      `}
                    >
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 mt-2 leading-7">
                      {item.text}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* Timeline animation */}
      <style>
        {`
          @keyframes timelineIn {
            from {
              opacity: 0;
              transform: translateX(-25px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default History;
