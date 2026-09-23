function Home({ goToPage }) {
  const cards = [
    {
      icon: "🏠",
      title: "Our Core Mandate",
      text: "To provide inclusive humanitarian assistance and protection services to crisis-affected and vulnerable communities, while supporting recovery, resilience, and sustainable development.",
      color: "emerald",
    },
    {
      icon: "📍",
      title: "Target Geographies",
      text: "PIDO operates in Ethiopia, prioritizing crisis-, drought-affected, and underserved communities, with focus on Afar, Tigray, South Ethiopia, and other vulnerable locations based on assessed needs.",
      color: "amber",
    },
    {
      icon: "🤝",
      title: "Mutual Partnership",
      text: "PIDO promotes partnerships with communities, government institutions, donors, UN agencies, NGOs, and other stakeholders to strengthen coordination and sustainable outcomes.",
      color: "emerald",
    },
  ];

  const colors = {
    emerald: {
      border: "border-emerald-500",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-600",
      iconHover: "group-hover:bg-emerald-600",
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
      titleHover: "group-hover:text-amber-700",
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      shadow: "hover:shadow-amber-100",
    },
  };

  return (
    <div className="bg-slate-50">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="
          relative overflow-hidden
          bg-emerald-950 text-white
          bg-cover bg-center
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,78,59,.88), rgba(2,44,34,.94)), url('/bacground.png')",
        }}
      >

        {/* Decorative background shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>

        {/* Decorative lines */}
        <div className="absolute top-20 left-8 w-20 h-1 bg-emerald-400/30 rounded-full"></div>
        <div className="absolute top-24 left-8 w-10 h-1 bg-amber-400/50 rounded-full"></div>

        <div className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28">

          <div className="max-w-5xl mx-auto text-center">

            {/* Logo */}
            <div className="animate-[heroLogo_0.8s_ease-out]">
              <div className="mx-auto w-32 h-32 md:w-36 md:h-36 rounded-3xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-black/20 p-4">
                <img
                  src="/logo.png"
                  alt="PIDO Logo"
                  className="h-24 md:h-28 w-auto object-contain"
                />
              </div>
            </div>

            {/* Small label */}
            <div className="mt-8 animate-[heroFade_0.8s_ease-out_0.15s_both]">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-300/20 text-emerald-300 text-xs md:text-sm font-bold uppercase tracking-[0.18em]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Inclusive Development
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                mt-6
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-black tracking-tight leading-tight
                animate-[heroTitle_0.9s_ease-out_0.2s_both]
              "
            >
              Equal Voices,
              <span className="block text-emerald-400 mt-1">
                Equal Choices
              </span>
            </h1>

            {/* Underline */}
            <div className="mx-auto mt-6 flex items-center justify-center gap-2">
              <div className="h-1 w-12 rounded-full bg-emerald-400"></div>
              <div className="h-1 w-5 rounded-full bg-amber-400"></div>
              <div className="h-1 w-12 rounded-full bg-emerald-400"></div>
            </div>

            {/* Description */}
            <p
              className="
                mt-7
                text-base sm:text-lg md:text-xl
                text-gray-200
                max-w-4xl mx-auto
                font-medium leading-relaxed
                animate-[heroFade_0.9s_ease-out_0.35s_both]
              "
            >
              PIDO is a nationally registered, disability inclusion-led,
              community-based, and impact-driven Ethiopian NGO. The
              organization empowers marginalized communities through
              innovative, rights-based solutions. Founded in 2024 and
              headquartered in Mekelle, PIDO places persons with
              disabilities, women, and youth at the forefront of its mission.
            </p>

            {/* Hero badges */}
            <div
              className="
                mt-8 flex flex-wrap justify-center gap-3
                animate-[heroFade_0.9s_ease-out_0.5s_both]
              "
            >
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm">
                Disability Inclusion
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm">
                Community Empowerment
              </span>

              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm">
                Humanitarian Response
              </span>
            </div>

          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>


      {/* =========================================================
          THREE MAIN CARDS
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">

        <div className="text-center mb-10">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Who We Are
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
            Our Work at a Glance
          </h2>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">

          {cards.map((card, index) => {
            const c = colors[card.color];

            return (
              <div
                key={card.title}
                className={`
                  group relative overflow-hidden
                  bg-white
                  border-l-4 ${c.border}
                  border-y border-r border-gray-100
                  rounded-2xl
                  p-6 md:p-7
                  shadow-sm ${c.shadow}
                  hover:-translate-y-2
                  transition-all duration-500
                  animate-[cardIn_0.7s_ease-out_both]
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >

                {/* Card number */}
                <span
                  className={`
                    absolute top-5 right-6
                    text-xs font-black
                    ${c.iconText}
                    opacity-30
                  `}
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className={`
                    w-14 h-14 rounded-2xl
                    ${c.iconBg} ${c.iconText}
                    flex items-center justify-center
                    text-2xl
                    ${c.iconHover}
                    group-hover:text-white
                    group-hover:scale-110
                    group-hover:rotate-3
                    transition-all duration-500
                  `}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  className={`
                    text-xl font-bold
                    text-slate-900
                    ${c.titleHover}
                    mt-5
                    transition-colors duration-300
                  `}
                >
                  {card.title}
                </h3>

                {/* Text */}
                <p className="mt-3 text-gray-600 leading-7">
                  {card.text}
                </p>

                {/* Badge */}
                <div className="mt-5">
                  <span
                    className={`
                      inline-flex items-center gap-2
                      px-3 py-1.5
                      rounded-full
                      ${c.badgeBg} ${c.badgeText}
                      text-xs font-bold
                    `}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    PIDO Focus
                  </span>
                </div>

                {/* Arrow */}
                <div
                  className={`
                    absolute right-6 bottom-6
                    ${c.iconText}
                    opacity-0 translate-x-[-8px]
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all duration-300
                  `}
                >
                  →
                </div>

              </div>
            );
          })}

        </div>
      </section>


      {/* =========================================================
          BOTTOM CALL TO ACTION
      ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <div className="relative overflow-hidden rounded-3xl bg-emerald-50 border border-emerald-100 p-7 md:p-10 text-center">

          <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-100 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-100/70 rounded-full blur-3xl"></div>

          <div className="relative">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Together We Can
            </span>

            <h2 className="mt-3 text-2xl md:text-3xl font-black text-emerald-950">
              Building Inclusive Communities
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
              Through inclusive development, community partnership, and
              humanitarian action, PIDO works to strengthen opportunities for
              vulnerable and underserved communities.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">

              <button
                type="button"
                onClick={() => goToPage("overview")}
                className="
                  px-6 py-3
                  rounded-xl
                  bg-emerald-600
                  text-white
                  font-bold
                  hover:bg-emerald-700
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  hover:shadow-emerald-200
                  transition-all duration-300
                "
              >
                Learn More
                <span className="ml-2">→</span>
              </button>

              <button
                type="button"
                onClick={() => goToPage("donate")}
                className="
                  px-6 py-3
                  rounded-xl
                  bg-white
                  border border-amber-300
                  text-amber-700
                  font-bold
                  hover:bg-amber-50
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Support Our Work
                <span className="ml-2">♥</span>
              </button>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style>
        {`
          @keyframes heroLogo {
            from {
              opacity: 0;
              transform: scale(0.85) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes heroTitle {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroFade {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes cardIn {
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

export default Home;
