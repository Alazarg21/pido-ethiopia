function Impact() {
  const impacts = [
    {
      number: "172",
      label: "Total Beneficiaries",
      icon: "◎",
      color: "emerald",
    },
    {
      number: "121",
      label: "Female Beneficiaries",
      icon: "◈",
      color: "amber",
    },
    {
      number: "51",
      label: "Male Beneficiaries",
      icon: "◇",
      color: "emerald",
    },
    {
      number: "8",
      label: "Target Woredas",
      icon: "⌖",
      color: "amber",
    },
  ];

  const colors = {
    emerald: {
      border: "border-emerald-500",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
      number: "text-emerald-700",
      titleHover: "group-hover:text-emerald-700",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      shadow: "hover:shadow-emerald-100",
    },
    amber: {
      border: "border-amber-500",
      iconBg: "bg-amber-100",
      iconText: "text-amber-600",
      number: "text-amber-600",
      titleHover: "group-hover:text-amber-700",
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      shadow: "hover:shadow-amber-100",
    },
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

        {/* Decorative background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative text-center mb-10">
          <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-3">
            Our Results
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-emerald-950">
            PIDO Program Impact
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-7">
            Our programs aim to create meaningful and measurable change for
            communities through inclusive and sustainable interventions.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {impacts.map((impact, index) => {
            const c = colors[impact.color];

            return (
              <div
                key={impact.label}
                className={`
                  group relative overflow-hidden
                  bg-gray-50/70 hover:bg-white
                  border-t-4 ${c.border}
                  border-x border-b border-gray-100
                  rounded-2xl
                  p-5 md:p-6
                  text-center
                  shadow-sm ${c.shadow}
                  transition-all duration-500
                  hover:-translate-y-2
                  animate-[impactIn_0.7s_ease-out_both]
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >

                {/* Number indicator */}
                <div className="absolute top-3 right-4 text-xs font-black text-gray-300">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`
                    mx-auto w-12 h-12 rounded-xl
                    ${c.iconBg} ${c.iconText}
                    flex items-center justify-center
                    text-xl font-bold
                    group-hover:scale-110
                    group-hover:rotate-6
                    transition-all duration-500
                  `}
                >
                  {impact.icon}
                </div>

                {/* Number */}
                <div
                  className={`
                    mt-5 text-4xl md:text-5xl
                    font-black ${c.number}
                    tracking-tight
                    group-hover:scale-105
                    transition-transform duration-300
                  `}
                >
                  {impact.number}
                </div>

                {/* Label */}
                <div
                  className={`
                    mt-3 text-xs md:text-sm
                    font-bold uppercase tracking-wide
                    text-gray-500
                    ${c.titleHover}
                    transition-colors duration-300
                  `}
                >
                  {impact.label}
                </div>

                {/* Bottom badge */}
                <div className="mt-4">
                  <span
                    className={`
                      inline-flex items-center gap-1.5
                      px-2.5 py-1
                      rounded-full
                      text-[10px] md:text-xs
                      font-bold
                      ${c.badgeBg} ${c.badgeText}
                    `}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    Impact
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom message */}
        <div className="relative mt-8 p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-center">
          <p className="text-sm md:text-base text-gray-600 leading-6">
            <span className="font-bold text-emerald-700">
              Measuring change matters.
            </span>{" "}
            These figures help us understand the reach of our programs and
            strengthen our commitment to the communities we serve.
          </p>
        </div>

      </div>

      <style>
        {`
          @keyframes impactIn {
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
    </section>
  );
}

export default Impact;