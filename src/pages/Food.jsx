function Food() {
  const focusAreas = [
    {
      title: "Food Security",
      icon: "🌾",
      color: "emerald",
      text: "Strengthening household access to adequate and nutritious food.",
    },
    {
      title: "Nutrition Education",
      icon: "🥗",
      color: "amber",
      text: "Promoting knowledge and practices that support healthy nutrition.",
    },
    {
      title: "Sustainable Agriculture",
      icon: "🌱",
      color: "emerald",
      text: "Supporting sustainable food production and resilient livelihoods.",
    },
    {
      title: "Maternal & Child Health",
      icon: "🤱",
      color: "amber",
      text: "Supporting the health and wellbeing of mothers and children.",
    },
    {
      title: "Community Health",
      icon: "🏥",
      color: "emerald",
      text: "Strengthening community-based health systems and services.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
      <div className="relative overflow-hidden bg-white rounded-[2rem] border border-emerald-100 shadow-xl">

        {/* Decorative background */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl"></div>

        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-400 to-amber-400"></div>

        <div className="relative p-7 sm:p-9 md:p-12">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start gap-6">

            {/* Icon */}
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center text-3xl md:text-4xl shadow-sm animate-[iconFloat_3s_ease-in-out_infinite]">
              🌾
            </div>

            <div className="flex-1">

              {/* Label */}
              <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-bold text-emerald-700 uppercase tracking-[0.18em] bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Food & Nutrition Program
              </span>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 mt-4 leading-tight">
                Food Security, Health{" "}
                <span className="text-amber-500">& Nutrition</span>
              </h2>

              {/* Accent line */}
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 w-16 rounded-full bg-emerald-600"></div>
                <div className="h-1 w-7 rounded-full bg-amber-400"></div>
              </div>

            </div>
          </div>

          {/* Description */}
          <div className="mt-8 md:ml-[96px]">

            <p className="text-gray-600 leading-7 text-base md:text-lg max-w-4xl">
              We improve household resilience through food security, nutrition
              education, sustainable agriculture, maternal and child health,
              and community-based health systems.
            </p>

            {/* Focus Areas */}
            <div className="mt-9 mb-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Our Focus Areas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {focusAreas.map((area, index) => {
                const isEmerald = area.color === "emerald";

                return (
                  <div
                    key={area.title}
                    className={`
                      group relative overflow-hidden p-5 md:p-6 rounded-2xl
                      border transition-all duration-300
                      hover:-translate-y-2 hover:shadow-lg
                      ${
                        isEmerald
                          ? "bg-emerald-50 border-emerald-100 hover:bg-emerald-600"
                          : "bg-amber-50 border-amber-100 hover:bg-amber-500"
                      }
                    `}
                    style={{
                      animation: `cardIn 0.6s ease-out ${
                        index * 0.1
                      }s both`,
                    }}
                  >

                    {/* Number */}
                    <span
                      className={`
                        absolute top-4 right-5 text-xs font-black
                        ${
                          isEmerald
                            ? "text-emerald-200 group-hover:text-emerald-300"
                            : "text-amber-200 group-hover:text-amber-300"
                        }
                      `}
                    >
                      0{index + 1}
                    </span>

                    {/* Icon */}
                    <div
                      className={`
                        text-2xl mb-4 transition-transform duration-300
                        group-hover:scale-110 group-hover:-rotate-3
                        ${
                          isEmerald
                            ? "text-emerald-600"
                            : "text-amber-600"
                        }
                      `}
                    >
                      {area.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        font-bold text-base mb-2
                        ${
                          isEmerald
                            ? "text-emerald-800 group-hover:text-white"
                            : "text-amber-800 group-hover:text-white"
                        }
                      `}
                    >
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`
                        text-sm leading-6
                        ${
                          isEmerald
                            ? "text-emerald-700/80 group-hover:text-emerald-50"
                            : "text-amber-700/80 group-hover:text-amber-50"
                        }
                      `}
                    >
                      {area.text}
                    </p>

                    {/* Arrow */}
                    <div
                      className={`
                        mt-4 text-sm font-bold transition-transform duration-300
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

          {/* Bottom Statement */}
          <div className="relative mt-9 md:ml-[96px]">

            <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-100 shadow-sm">

              <div className="flex items-start gap-4">

                {/* Quote icon */}
                <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-xl bg-amber-500 text-white items-center justify-center text-xl font-black">
                  “
                </div>

                <p className="text-sm md:text-base font-medium text-slate-700 leading-6">
                  <span className="font-bold text-amber-600">
                    Our commitment:
                  </span>{" "}
                  strengthening healthy, resilient households through improved
                  nutrition, sustainable food systems, quality health services,
                  and community-led solutions.
                </p>

              </div>

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
              transform: translateY(15px);
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

export default Food;