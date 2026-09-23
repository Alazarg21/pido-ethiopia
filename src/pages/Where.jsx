function Where() {
  const locations = [
    {
      title: "Addis Ababa Head Office",
      description:
        "Supports executive coordination, institutional partnerships, monitoring, compliance, and financial accountability.",
      label: "Policy & Compliance Center",
      color: "emerald",
      icon: "⌂",
    },
    {
      title: "Tigray Regional Coordination Hub",
      description:
        "Coordinates field deployment and community-focused humanitarian and development activities.",
      label: "Field Operations",
      color: "amber",
      icon: "⌖",
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
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-800",
      arrow: "text-emerald-600",
      shadow: "hover:shadow-emerald-100",
    },

    amber: {
      border: "border-amber-500",
      iconBg: "bg-amber-100",
      iconText: "text-amber-600",
      iconHover: "group-hover:bg-amber-500",
      iconHoverText: "group-hover:text-white",
      titleHover: "group-hover:text-amber-700",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-800",
      arrow: "text-amber-600",
      shadow: "hover:shadow-amber-100",
    },
  };

  return (
    <div className="bg-slate-50">

      <section className="max-w-5xl mx-auto px-4 py-12">

        <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

          {/* Decorative background */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

          {/* HEADER */}
          <div className="relative mb-10">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Where We Work
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
              Geographic Presence
            </h2>

            <div className="mt-4 h-1 w-14 bg-emerald-600 rounded-full"></div>

            <p className="mt-4 max-w-2xl text-gray-600 leading-7">
              PIDO maintains strategic coordination and field operations to
              support communities according to assessed needs.
            </p>

          </div>

          {/* LOCATIONS */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">

            {locations.map((location, index) => {
              const c = colors[location.color];

              return (
                <div
                  key={location.title}
                  className={`
                    group
                    relative
                    overflow-hidden

                    p-6
                    md:p-7

                    bg-gray-50/70
                    hover:bg-white

                    rounded-2xl

                    border-l-4
                    ${c.border}

                    border-y
                    border-r
                    border-gray-100

                    shadow-sm
                    ${c.shadow}

                    transition-all
                    duration-500

                    hover:-translate-y-2

                    animate-[locationIn_0.7s_ease-out_both]
                  `}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >

                  {/* Top row */}
                  <div className="flex items-center justify-between mb-5">

                    {/* Icon */}
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
                      {location.icon}
                    </div>

                    {/* Number */}
                    <span
                      className={`
                        text-sm
                        font-black
                        ${c.iconText}
                        opacity-50
                      `}
                    >
                      0{index + 1}
                    </span>

                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      font-bold
                      text-xl
                      text-slate-900

                      ${c.titleHover}

                      transition-colors
                      duration-300
                    `}
                  >
                    {location.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mt-3 leading-7">
                    {location.description}
                  </p>

                  {/* Badge */}
                  <div className="mt-5">
                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2

                        text-xs
                        font-bold

                        ${c.badgeBg}
                        ${c.badgeText}

                        px-3
                        py-1.5

                        rounded-full
                      `}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {location.label}
                    </span>
                  </div>

                  {/* Hover arrow */}
                  <div
                    className={`
                      absolute
                      right-6
                      bottom-6

                      ${c.arrow}

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

      {/* Animation */}
      <style>
        {`
          @keyframes locationIn {
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

export default Where;
