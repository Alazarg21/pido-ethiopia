function Policies() {
  const policies = [
    {
      title: "Safeguarding & PSEA",
      text: "PIDO is committed to safeguarding, prevention of sexual exploitation and abuse, and protection of vulnerable people across its programs.",
      icon: "◈",
      color: "emerald",
    },
    {
      title: "Disability Inclusion Framework",
      text: "PIDO promotes accessibility, participation, dignity, and inclusion of persons with disabilities across programs and services.",
      icon: "◎",
      color: "amber",
    },
  ];

  const colors = {
    emerald: {
      border: "border-emerald-500",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
      iconHover: "group-hover:bg-emerald-600",
      iconHoverText: "group-hover:text-white",
      titleHover: "group-hover:text-emerald-700",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      shadow: "hover:shadow-emerald-100",
    },

    amber: {
      border: "border-amber-500",
      iconBg: "bg-amber-100",
      iconText: "text-amber-600",
      iconHover: "group-hover:bg-amber-500",
      iconHoverText: "group-hover:text-white",
      titleHover: "group-hover:text-amber-700",
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      shadow: "hover:shadow-amber-100",
    },
  };

  return (
    <div className="bg-slate-50">

      <section className="max-w-5xl mx-auto px-4 py-12">

        <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

          {/* HEADER */}
          <div className="relative mb-10">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our Standards
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
              Institutional Compliance & Safeguarding
            </h2>

            <div className="mt-4 h-1 w-14 bg-emerald-600 rounded-full"></div>

            <p className="mt-4 max-w-2xl text-gray-600 leading-7">
              PIDO is committed to responsible, inclusive, and accountable
              practices that protect people and strengthen the quality of its
              programs and services.
            </p>

          </div>

          {/* POLICY CARDS */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">

            {policies.map((policy, index) => {
              const c = colors[policy.color];

              return (
                <div
                  key={policy.title}
                  className={`
                    group
                    relative
                    overflow-hidden

                    bg-gray-50/70
                    hover:bg-white

                    border-l-4
                    ${c.border}

                    border-y
                    border-r
                    border-gray-100

                    rounded-2xl

                    p-6
                    md:p-7

                    shadow-sm
                    ${c.shadow}

                    transition-all
                    duration-500

                    hover:-translate-y-2

                    animate-[policyIn_0.7s_ease-out_both]
                  `}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >

                  {/* TOP ROW */}
                  <div className="flex items-center justify-between mb-5">

                    {/* ICON */}
                    <div
                      className={`
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

                        group-hover:scale-110
                        group-hover:rotate-3

                        transition-all
                        duration-500
                      `}
                    >
                      {policy.icon}
                    </div>

                    {/* NUMBER */}
                    <span
                      className={`
                        text-xs
                        font-black
                        ${c.iconText}
                        opacity-50
                      `}
                    >
                      0{index + 1}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h4
                    className={`
                      text-lg
                      md:text-xl
                      font-bold
                      text-slate-900

                      ${c.titleHover}

                      transition-colors
                      duration-300
                    `}
                  >
                    {policy.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 mt-3 leading-7">
                    {policy.text}
                  </p>

                  {/* BADGE */}
                  <div className="mt-5">
                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2

                        px-3
                        py-1.5

                        rounded-full

                        text-xs
                        font-bold

                        ${c.badgeBg}
                        ${c.badgeText}
                      `}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      Institutional Standard
                    </span>
                  </div>

                  {/* HOVER ARROW */}
                  <div
                    className={`
                      absolute
                      right-6
                      bottom-6

                      ${c.iconText}

                      opacity-0
                      translate-x-[-8px]

                      group-hover:opacity-100
                      group-hover:translate-x-0

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

      </section>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes policyIn {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
}

export default Policies;