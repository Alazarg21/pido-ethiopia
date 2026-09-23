function About({ section = "overview" }) {
  const values = [
    {
      title: "Integrity",
      text: "Transparency, accountability, honesty and ethical conduct.",
      color: "emerald",
      icon: "✓",
    },
    {
      title: "Nurturing Potential",
      text: "Strengthening people and institutions through capacity building.",
      color: "amber",
      icon: "↗",
    },
    {
      title: "Compassion",
      text: "Serving everyone with dignity, empathy and respect.",
      color: "emerald",
      icon: "♡",
    },
    {
      title: "Leadership for Change",
      text: "Empowering youth and persons with disabilities.",
      color: "amber",
      icon: "★",
    },
    {
      title: "Unity in Diversity",
      text: "Celebrating differences and promoting inclusion.",
      color: "emerald",
      icon: "◎",
    },
    {
      title: "Sustainability",
      text: "Building long-term environmental and social impact.",
      color: "amber",
      icon: "↻",
    },
    {
      title: "Innovation",
      text: "Creative and evidence-based solutions.",
      color: "emerald",
      icon: "✦",
    },
    {
      title: "Voice & Participation",
      text: "Ensuring marginalized communities participate in decisions.",
      color: "amber",
      icon: "◈",
    },
    {
      title: "Equity",
      text: "Promoting fairness and equal opportunity.",
      color: "emerald",
      icon: "=",
    },
  ];

  const approaches = [
    {
      title: "Inclusion & Equity",
      text: "Ensuring no one is left behind by removing barriers to participation.",
      color: "emerald",
      icon: "◈",
    },
    {
      title: "Community Engagement & Mobilization",
      text: "Working alongside communities to create sustainable change.",
      color: "teal",
      icon: "◎",
    },
    {
      title: "Awareness-Raising & Rights Education",
      text: "Promoting human rights, disability inclusion and gender equality.",
      color: "sky",
      icon: "◉",
    },
    {
      title: "Capacity Building & Skills Training",
      text: "Strengthening institutions and communities through training.",
      color: "amber",
      icon: "↗",
    },
    {
      title: "Evidence-Based Advocacy & Policy Dialogue",
      text: "Using research and community evidence to influence policy.",
      color: "rose",
      icon: "▣",
    },
  ];

  const locations = [
    {
      title: "Addis Ababa Head Office",
      text: "Supports executive coordination, institutional partnerships, monitoring, compliance, and financial accountability.",
      label: "Policy & Compliance Center",
      color: "emerald",
      icon: "⌂",
    },
    {
      title: "Tigray Regional Coordination Hub",
      text: "Coordinates field deployment and community-focused humanitarian and development activities.",
      label: "Field Operations",
      color: "amber",
      icon: "⌖",
    },
  ];

  const policies = [
    {
      title: "Safeguarding & PSEA",
      text: "PIDO is committed to safeguarding, prevention of sexual exploitation and abuse, and protection of vulnerable people across its programs.",
      color: "emerald",
      icon: "◈",
    },
    {
      title: "Disability Inclusion Framework",
      text: "PIDO promotes accessibility, participation, dignity, and inclusion of persons with disabilities across programs and services.",
      color: "amber",
      icon: "◎",
    },
  ];

  const colorStyles = {
    emerald: {
      border: "border-emerald-500",
      bg: "bg-emerald-100",
      text: "text-emerald-600",
      hoverBg: "group-hover:bg-emerald-600",
      hoverText: "group-hover:text-white",
      title: "group-hover:text-emerald-700",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      shadow: "hover:shadow-emerald-100",
    },
    amber: {
      border: "border-amber-500",
      bg: "bg-amber-100",
      text: "text-amber-600",
      hoverBg: "group-hover:bg-amber-500",
      hoverText: "group-hover:text-white",
      title: "group-hover:text-amber-700",
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      shadow: "hover:shadow-amber-100",
    },
    teal: {
      border: "border-teal-500",
      bg: "bg-teal-100",
      text: "text-teal-600",
      hoverBg: "group-hover:bg-teal-600",
      hoverText: "group-hover:text-white",
      title: "group-hover:text-teal-700",
      badgeBg: "bg-teal-50",
      badgeText: "text-teal-700",
      shadow: "hover:shadow-teal-100",
    },
    sky: {
      border: "border-sky-500",
      bg: "bg-sky-100",
      text: "text-sky-600",
      hoverBg: "group-hover:bg-sky-600",
      hoverText: "group-hover:text-white",
      title: "group-hover:text-sky-700",
      badgeBg: "bg-sky-50",
      badgeText: "text-sky-700",
      shadow: "hover:shadow-sky-100",
    },
    rose: {
      border: "border-rose-500",
      bg: "bg-rose-100",
      text: "text-rose-600",
      hoverBg: "group-hover:bg-rose-600",
      hoverText: "group-hover:text-white",
      title: "group-hover:text-rose-700",
      badgeBg: "bg-rose-50",
      badgeText: "text-rose-700",
      shadow: "hover:shadow-rose-100",
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* =========================================================
          ORGANIZATION OVERVIEW
      ========================================================= */}
      {section === "overview" && (
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

            <div className="relative">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                About PIDO
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
                Organization Overview
              </h2>

              <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">

                <div className="space-y-5 text-sm md:text-base text-gray-600 leading-7">
                  <p>
                    Prime for an Inclusive and Developmental Organization
                    (PIDO) is a national non-governmental and non-profit
                    organization dedicated to promoting inclusive development,
                    social justice, and sustainable community transformation
                    in Ethiopia.
                  </p>

                  <p>
                    PIDO works to empower vulnerable and marginalized
                    populations, including persons with disabilities, women,
                    children, youth, and underserved communities, by creating
                    equitable access to opportunities, essential services, and
                    sustainable livelihoods.
                  </p>

                  <p>
                    The organization focuses on education, health and
                    nutrition, livelihoods, social protection, disability
                    inclusion, youth empowerment, community development, and
                    institutional capacity building.
                  </p>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                  <img
                    src="/structure.png"
                    alt="PIDO organizational structure"
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent"></div>

                  <span className="absolute bottom-4 left-4 text-white text-sm font-bold">
                    PIDO Organizational Structure
                  </span>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}


      {/* =========================================================
          VISION & MISSION
      ========================================================= */}
      {section === "mission" && (
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="relative overflow-hidden bg-emerald-950 text-white p-8 md:p-12 rounded-3xl shadow-xl">

            <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Our Direction
              </span>

              <h2 className="text-3xl md:text-4xl font-black mt-2">
                Vision & Mission
              </h2>

              <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400"></div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-6 mt-10">

              <div className="group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  ◉
                </div>

                <h3 className="text-emerald-400 font-bold uppercase text-xs tracking-[0.18em] mt-5 mb-3">
                  Our Vision
                </h3>

                <p className="text-gray-200 leading-7">
                  A world where every individual, regardless of disability or
                  vulnerability, has access to opportunities, resources, and
                  services to lead a dignified life.
                </p>
              </div>

              <div className="group p-7 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  ↗
                </div>

                <h3 className="text-amber-400 font-bold uppercase text-xs tracking-[0.18em] mt-5 mb-3">
                  Our Mission
                </h3>

                <p className="text-gray-200 leading-7">
                  To promote equality and empower vulnerable individuals by
                  building inclusive systems across education, health,
                  nutrition and livelihoods.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}


      {/* =========================================================
          CORE VALUES
      ========================================================= */}
      {section === "values" && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-lg border border-emerald-100 p-7 md:p-10">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

            <div className="relative text-center mb-10">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                What Guides Us
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
                Core Values
              </h2>

              <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>
            </div>

            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {values.map((value, index) => {
                const c = colorStyles[value.color];

                return (
                  <div
                    key={value.title}
                    className={`
                      group relative
                      bg-gray-50/70 hover:bg-white
                      border-l-4 ${c.border}
                      border-y border-r border-gray-100
                      rounded-2xl p-6
                      shadow-sm ${c.shadow}
                      hover:-translate-y-2
                      transition-all duration-500
                      animate-[valueIn_0.6s_ease-out_both]
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >

                    <div className="flex items-center justify-between">
                      <div
                        className={`
                          w-12 h-12 rounded-xl
                          ${c.bg} ${c.text}
                          flex items-center justify-center
                          text-xl font-bold
                          ${c.hoverBg} ${c.hoverText}
                          group-hover:scale-110 group-hover:rotate-3
                          transition-all duration-500
                        `}
                      >
                        {value.icon}
                      </div>

                      <span className={`text-xs font-black ${c.text} opacity-40`}>
                        0{index + 1}
                      </span>
                    </div>

                    <h3
                      className={`
                        mt-5 text-lg font-bold text-slate-900
                        ${c.title}
                        transition-colors duration-300
                      `}
                    >
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-6">
                      {value.text}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>
        </section>
      )}


      {/* =========================================================
          CORE APPROACHES
      ========================================================= */}
      {section === "approaches" && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-lg border border-emerald-100 p-7 md:p-10">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

            <div className="relative text-center mb-10">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                How We Work
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
                Core Approaches
              </h2>

              <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>
            </div>

            <div className="relative space-y-5">

              {approaches.map((approach, index) => {
                const c = colorStyles[approach.color];

                return (
                  <div
                    key={approach.title}
                    className={`
                      group relative flex items-start gap-5
                      bg-gray-50/60 hover:bg-white
                      border-l-4 ${c.border}
                      rounded-r-2xl px-5 md:px-7 py-5
                      shadow-sm ${c.shadow}
                      transition-all duration-500
                      hover:-translate-y-1 hover:translate-x-1
                      animate-[approachIn_0.7s_ease-out_both]
                    `}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >

                    <div className="absolute -left-3 top-1/2 -translate-y-1/2">
                      <div
                        className={`
                          w-6 h-6 rounded-full ${c.bg}
                          ${c.text}
                          border-2 border-white
                          flex items-center justify-center
                          text-[10px] font-black
                          shadow-md
                          group-hover:scale-125
                          transition-transform duration-300
                        `}
                      >
                        {index + 1}
                      </div>
                    </div>

                    <div
                      className={`
                        shrink-0 w-14 h-14 rounded-2xl
                        ${c.bg} ${c.text}
                        flex items-center justify-center
                        text-2xl font-bold
                        ${c.hoverBg} ${c.hoverText}
                        group-hover:rotate-6 group-hover:scale-110
                        transition-all duration-500
                      `}
                    >
                      {approach.icon}
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`
                          font-bold text-lg md:text-xl
                          text-slate-900 ${c.title}
                          transition-colors duration-300
                        `}
                      >
                        {approach.title}
                      </h3>

                      <p className="text-gray-600 mt-2 leading-7">
                        {approach.text}
                      </p>
                    </div>

                    <div
                      className={`
                        hidden md:flex shrink-0
                        items-center justify-center
                        w-10 h-10 rounded-full
                        ${c.bg} ${c.text}
                        group-hover:translate-x-2
                        transition-all duration-300
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
      )}


      {/* =========================================================
          HISTORY
      ========================================================= */}
      {section === "history" && (
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-50/70 rounded-full blur-3xl"></div>

            <div className="relative mb-10">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                Our Journey
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
                Our Operational Timeline
              </h2>

              <div className="mt-4 h-1 w-14 bg-emerald-600 rounded-full"></div>
            </div>

            <div className="relative">
              <div className="absolute left-[11px] top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-emerald-500 via-amber-400 to-emerald-300"></div>

              <div className="space-y-10">

                <div className="group relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-emerald-600 border-4 border-white ring-4 ring-emerald-100 shadow-md group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="bg-gray-50/60 hover:bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <span className="text-sm font-black text-emerald-600">
                      01
                    </span>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 mt-2 transition-colors">
                      Establishment & Strategy Mapping
                    </h4>

                    <p className="text-gray-600 mt-2 leading-7">
                      PIDO was founded by senior professionals with
                      multidisciplinary experience in humanitarian response,
                      development programming, public health, nutrition,
                      protection, livelihoods, and community-based
                      intervention.
                    </p>
                  </div>
                </div>

                <div className="group relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-white ring-4 ring-amber-100 shadow-md group-hover:scale-125 transition-transform duration-300"></div>

                  <div className="bg-gray-50/60 hover:bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                    <span className="text-sm font-black text-amber-600">
                      02
                    </span>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 mt-2 transition-colors">
                      Regional Hub Expansion
                    </h4>

                    <p className="text-gray-600 mt-2 leading-7">
                      PIDO develops emergency response and recovery initiatives
                      to support vulnerable communities and hard-to-reach areas.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}


      {/* =========================================================
          WHERE WE WORK
      ========================================================= */}
      {section === "where" && (
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

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

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">

              {locations.map((location, index) => {
                const c = colorStyles[location.color];

                return (
                  <div
                    key={location.title}
                    className={`
                      group relative overflow-hidden
                      p-6 md:p-7
                      bg-gray-50/70 hover:bg-white
                      rounded-2xl
                      border-l-4 ${c.border}
                      border-y border-r border-gray-100
                      shadow-sm ${c.shadow}
                      transition-all duration-500
                      hover:-translate-y-2
                    `}
                  >

                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`
                          w-14 h-14 rounded-2xl
                          ${c.bg} ${c.text}
                          flex items-center justify-center
                          text-2xl font-bold
                          ${c.hoverBg} ${c.hoverText}
                          group-hover:scale-110 group-hover:rotate-3
                          transition-all duration-500
                        `}
                      >
                        {location.icon}
                      </div>

                      <span className={`text-sm font-black ${c.text} opacity-50`}>
                        0{index + 1}
                      </span>
                    </div>

                    <h3
                      className={`
                        font-bold text-xl text-slate-900
                        ${c.title}
                        transition-colors duration-300
                      `}
                    >
                      {location.title}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7">
                      {location.text}
                    </p>

                    <div className="mt-5">
                      <span
                        className={`
                          inline-flex items-center gap-2
                          text-xs font-bold
                          ${c.badgeBg} ${c.badgeText}
                          px-3 py-1.5 rounded-full
                        `}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        {location.label}
                      </span>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </section>
      )}


      {/* =========================================================
          ACCOUNTABILITY
      ========================================================= */}
      {section === "accountability" && (
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl">
                📋
              </div>

              <span className="inline-block mt-5 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                Transparency & Trust
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
                Accountability, Transparency & Audits
              </h2>

              <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>

              <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7">
                PIDO is committed to accountability, transparency, responsible
                resource management, and applicable civil society requirements.
              </p>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mt-10">

              <div className="group bg-gray-50/70 hover:bg-white border-l-4 border-emerald-500 border-y border-r border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-emerald-100 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl">
                      📄
                    </span>

                    <span className="text-sm font-bold text-slate-900">
                      Annual Performance Report
                    </span>
                  </div>

                  <button
                    type="button"
                    className="text-emerald-600 hover:text-emerald-800 font-bold text-sm"
                  >
                    View
                  </button>
                </div>
              </div>

              <div className="group bg-gray-50/70 hover:bg-white border-l-4 border-amber-500 border-y border-r border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-amber-100 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl">
                      📊
                    </span>

                    <span className="text-sm font-bold text-slate-900">
                      Financial Audit Report
                    </span>
                  </div>

                  <button
                    type="button"
                    className="text-amber-600 hover:text-amber-800 font-bold text-sm"
                  >
                    View
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}


      {/* =========================================================
          POLICIES
      ========================================================= */}
      {section === "policies" && (
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

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
                practices that protect people and strengthen the quality of
                its programs and services.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">

              {policies.map((policy, index) => {
                const c = colorStyles[policy.color];

                return (
                  <div
                    key={policy.title}
                    className={`
                      group relative overflow-hidden
                      bg-gray-50/70 hover:bg-white
                      border-l-4 ${c.border}
                      border-y border-r border-gray-100
                      rounded-2xl p-6
                      shadow-sm ${c.shadow}
                      hover:-translate-y-2
                      transition-all duration-500
                    `}
                  >

                    <div className="flex items-center justify-between">
                      <div
                        className={`
                          w-14 h-14 rounded-2xl
                          ${c.bg} ${c.text}
                          flex items-center justify-center
                          text-2xl font-bold
                          ${c.hoverBg} ${c.hoverText}
                          group-hover:scale-110 group-hover:rotate-3
                          transition-all duration-500
                        `}
                      >
                        {policy.icon}
                      </div>

                      <span className={`text-xs font-black ${c.text} opacity-50`}>
                        0{index + 1}
                      </span>
                    </div>

                    <h4
                      className={`
                        mt-5 text-lg md:text-xl
                        font-bold text-slate-900
                        ${c.title}
                        transition-colors duration-300
                      `}
                    >
                      {policy.title}
                    </h4>

                    <p className="text-gray-600 mt-3 leading-7">
                      {policy.text}
                    </p>

                    <div className="mt-5">
                      <span
                        className={`
                          inline-flex items-center gap-2
                          px-3 py-1.5 rounded-full
                          text-xs font-bold
                          ${c.badgeBg} ${c.badgeText}
                        `}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                        Institutional Standard
                      </span>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </section>
      )}


      {/* =========================================================
          ANIMATIONS
      ========================================================= */}
      <style>
        {`
          @keyframes valueIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes approachIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

    </div>
  );
}

export default About;