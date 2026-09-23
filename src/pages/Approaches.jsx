function Approaches() {
  const approaches = [
    {
      title: "Inclusion & Equity",
      text: "Ensuring no one is left behind by removing barriers to participation.",
      icon: "◈",
      color: "emerald",
    },
    {
      title: "Community Engagement & Mobilization",
      text: "Working alongside communities to create sustainable change.",
      icon: "◎",
      color: "teal",
    },
    {
      title: "Awareness-Raising & Rights Education",
      text: "Promoting human rights, disability inclusion and gender equality.",
      icon: "◉",
      color: "sky",
    },
    {
      title: "Capacity Building & Skills Training",
      text: "Strengthening institutions and communities through training.",
      icon: "↗",
      color: "amber",
    },
    {
      title: "Evidence-Based Advocacy & Policy Dialogue",
      text: "Using research and community evidence to influence policy.",
      icon: "▣",
      color: "rose",
    },
  ];

  const colors = {
    emerald: {
      border: "border-emerald-500",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
      iconHover: "group-hover:bg-emerald-600",
      iconHoverText: "group-hover:text-white",
      number: "bg-emerald-600",
      title: "group-hover:text-emerald-700",
      arrowBg: "bg-emerald-50",
      arrowText: "text-emerald-600",
      arrowHover: "group-hover:bg-emerald-600",
      shadow: "hover:shadow-emerald-100",
    },

    teal: {
      border: "border-teal-500",
      iconBg: "bg-teal-100",
      iconText: "text-teal-600",
      iconHover: "group-hover:bg-teal-600",
      iconHoverText: "group-hover:text-white",
      number: "bg-teal-600",
      title: "group-hover:text-teal-700",
      arrowBg: "bg-teal-50",
      arrowText: "text-teal-600",
      arrowHover: "group-hover:bg-teal-600",
      shadow: "hover:shadow-teal-100",
    },

    sky: {
      border: "border-sky-500",
      iconBg: "bg-sky-100",
      iconText: "text-sky-600",
      iconHover: "group-hover:bg-sky-600",
      iconHoverText: "group-hover:text-white",
      number: "bg-sky-600",
      title: "group-hover:text-sky-700",
      arrowBg: "bg-sky-50",
      arrowText: "text-sky-600",
      arrowHover: "group-hover:bg-sky-600",
      shadow: "hover:shadow-sky-100",
    },

    amber: {
      border: "border-amber-500",
      iconBg: "bg-amber-100",
      iconText: "text-amber-600",
      iconHover: "group-hover:bg-amber-600",
      iconHoverText: "group-hover:text-white",
      number: "bg-amber-600",
      title: "group-hover:text-amber-700",
      arrowBg: "bg-amber-50",
      arrowText: "text-amber-600",
      arrowHover: "group-hover:bg-amber-600",
      shadow: "hover:shadow-amber-100",
    },

    rose: {
      border: "border-rose-500",
      iconBg: "bg-rose-100",
      iconText: "text-rose-600",
      iconHover: "group-hover:bg-rose-600",
      iconHoverText: "group-hover:text-white",
      number: "bg-rose-600",
      title: "group-hover:text-rose-700",
      arrowBg: "bg-rose-50",
      arrowText: "text-rose-600",
      arrowHover: "group-hover:bg-rose-600",
      shadow: "hover:shadow-rose-100",
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="relative overflow-hidden bg-white rounded-3xl shadow-lg border border-emerald-100 p-8 md:p-12">

        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl animate-pulse"></div>

        {/* TITLE */}
        <div className="relative text-center mb-12">

          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-emerald-600 mb-3">
            How We Work
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-emerald-950">
            Core Approaches
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-emerald-600"></div>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-relaxed">
            Our approaches guide how we work with communities, institutions,
            and partners to create meaningful and sustainable change.
          </p>
        </div>

        {/* APPROACHES */}
        <div className="relative space-y-5">

          {approaches.map((approach, index) => {
            const c = colors[approach.color];

            return (
              <div
                key={approach.title}
                className={`
                  group
                  relative
                  flex
                  items-start
                  gap-5

                  bg-gray-50/60
                  hover:bg-white

                  border-l-4
                  ${c.border}

                  rounded-r-2xl

                  px-5
                  md:px-7
                  py-5

                  shadow-sm
                  ${c.shadow}

                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:translate-x-1

                  animate-[slideIn_0.7s_ease-out_both]
                `}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >

                {/* NUMBER */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2">
                  <div
                    className={`
                      w-6
                      h-6
                      rounded-full
                      ${c.number}

                      text-white
                      text-xs
                      font-bold

                      flex
                      items-center
                      justify-center

                      shadow-md

                      group-hover:scale-125

                      transition-transform
                      duration-300
                    `}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* ICON */}
                <div
                  className={`
                    shrink-0
                    w-14
                    h-14
                    rounded-2xl

                    ${c.iconBg}
                    ${c.iconText}

                    flex
                    items-center
                    justify-center

                    text-2xl
                    font-bold

                    ${c.iconHover}
                    ${c.iconHoverText}

                    group-hover:rotate-6
                    group-hover:scale-110

                    transition-all
                    duration-500
                  `}
                >
                  {approach.icon}
                </div>

                {/* TEXT */}
                <div className="flex-1">

                  <h3
                    className={`
                      font-bold
                      text-lg
                      md:text-xl

                      text-slate-900

                      ${c.title}

                      transition-colors
                      duration-300
                    `}
                  >
                    {approach.title}
                  </h3>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {approach.text}
                  </p>

                </div>

                {/* ARROW */}
                <div
                  className={`
                    hidden
                    md:flex
                    shrink-0

                    items-center
                    justify-center

                    w-10
                    h-10

                    rounded-full

                    ${c.arrowBg}
                    ${c.arrowText}

                    group-hover:text-white
                    ${c.arrowHover}

                    group-hover:translate-x-2

                    transition-all
                    duration-300
                  `}
                >
                  →
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
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

export default Approaches;