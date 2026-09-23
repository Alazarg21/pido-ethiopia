function Governance() {
  const focusAreas = [
    {
      title: "Civic Participation",
      icon: "🗣️",
      color: "emerald",
      text: "Encouraging communities to participate actively in civic and public affairs.",
    },
    {
      title: "Accountability",
      icon: "📊",
      color: "amber",
      text: "Promoting responsibility, responsiveness, and accountability in institutions.",
    },
    {
      title: "Transparency",
      icon: "🔍",
      color: "emerald",
      text: "Supporting openness and access to information in governance processes.",
    },
    {
      title: "Rights Awareness",
      icon: "📜",
      color: "amber",
      text: "Increasing awareness of citizens' rights and responsibilities.",
    },
    {
      title: "Inclusive Decision-Making",
      icon: "🤝",
      color: "emerald",
      text: "Promoting meaningful participation in decisions that affect communities.",
    },
    {
      title: "Community Voice",
      icon: "👥",
      color: "amber",
      text: "Strengthening the voices of communities in governance and development.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
      <div className="relative overflow-hidden bg-white rounded-[2rem] border border-emerald-100 shadow-xl">

        {/* Top Accent */}
        <div className="h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-400"></div>

        {/* Decorative Background */}
        <div className="absolute -top-28 -right-28 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl"></div>

        <div className="relative p-7 md:p-10 lg:p-12">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start gap-5">

            {/* Icon */}
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 flex items-center justify-center text-3xl md:text-4xl shadow-sm animate-[iconFloat_3s_ease-in-out_infinite]">
              ⚖️
            </div>

            <div className="flex-1">

              {/* Label */}
              <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-[0.18em] bg-emerald-50 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Governance & Civic Participation
              </span>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-4 leading-tight">
                Civic Engagement{" "}
                <span className="text-amber-500">& Good Governance</span>
              </h2>

              {/* Accent Line */}
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 md:ml-[84px]">

            <p className="text-gray-600 leading-7 text-base md:text-lg max-w-4xl">
              We strengthen civic participation, accountability, transparent
              governance, citizens’ awareness of rights and responsibilities,
              and inclusive decision-making.
            </p>

            {/* Section Label */}
            <div className="flex items-center gap-3 mt-10 mb-5">
              <div className="w-8 h-1 rounded-full bg-emerald-500"></div>

              <h3 className="text-sm font-black uppercase tracking-[0.16em] text-emerald-900">
                Our Focus Areas
              </h3>
            </div>

            {/* Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {focusAreas.map((area, index) => {
                const isEmerald = area.color === "emerald";

                return (
                  <div
                    key={area.title}
                    className={`
                      group relative overflow-hidden p-5 rounded-2xl
                      border transition-all duration-300
                      hover:-translate-y-1.5 hover:shadow-lg
                      animate-[cardIn_0.6s_ease-out_both]
                      ${
                        isEmerald
                          ? "bg-emerald-50/80 border-emerald-100 hover:bg-emerald-600"
                          : "bg-amber-50/80 border-amber-100 hover:bg-amber-500"
                      }
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >

                    {/* Number */}
                    <div
                      className={`
                        absolute top-4 right-4 text-xs font-black
                        ${
                          isEmerald
                            ? "text-emerald-200 group-hover:text-emerald-300"
                            : "text-amber-200 group-hover:text-amber-100"
                        }
                      `}
                    >
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                        w-11 h-11 rounded-xl flex items-center justify-center
                        text-xl mb-4 shadow-sm
                        transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-3
                        ${
                          isEmerald
                            ? "bg-white text-emerald-600"
                            : "bg-white text-amber-600"
                        }
                      `}
                    >
                      {area.icon}
                    </div>

                    {/* Title */}
                    <h4
                      className={`
                        text-base font-black transition-colors duration-300
                        ${
                          isEmerald
                            ? "text-emerald-900 group-hover:text-white"
                            : "text-amber-900 group-hover:text-white"
                        }
                      `}
                    >
                      {area.title}
                    </h4>

                    {/* Description */}
                    <p
                      className={`
                        mt-2 text-sm leading-6 transition-colors duration-300
                        ${
                          isEmerald
                            ? "text-emerald-700 group-hover:text-emerald-50"
                            : "text-amber-700 group-hover:text-amber-50"
                        }
                      `}
                    >
                      {area.text}
                    </p>

                    {/* Arrow */}
                    <div
                      className={`
                        mt-4 text-sm font-bold transition-all duration-300
                        group-hover:translate-x-1
                        ${
                          isEmerald
                            ? "text-emerald-600 group-hover:text-white"
                            : "text-amber-600 group-hover:text-white"
                        }
                      `}
                    >
                      Explore focus area →
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Bottom Commitment */}
          <div className="relative mt-10 md:ml-[84px] overflow-hidden p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-emerald-50 border border-emerald-100">

            {/* Quote Decoration */}
            <div className="absolute -right-2 -top-5 text-7xl font-black text-emerald-100/70">
              “
            </div>

            <div className="relative flex gap-4">

              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl">
                ⚖️
              </div>

              <p className="text-sm md:text-base font-medium text-slate-700 leading-7">
                <span className="font-bold text-amber-600">
                  Our commitment:
                </span>{" "}
                supporting informed civic participation, stronger accountability,
                transparent institutions, and inclusive decision-making that
                enables communities to have a meaningful voice.
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style>
        {`
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
              transform: translateY(18px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Governance;