import { useState } from "react";

function Accountability() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const reports = [
    {
      title: "Annual Performance Report",
      icon: "📄",
      file: "annual-performance-report.pdf",
      color: "emerald",
    },
    {
      title: "Financial Audit Report",
      icon: "📊",
      file: null,
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
      button: "text-emerald-600",
      buttonHover: "hover:text-emerald-800",
      badge: "bg-emerald-50 text-emerald-700",
      shadow: "hover:shadow-emerald-100",
    },

    amber: {
      border: "border-amber-500",
      iconBg: "bg-amber-100",
      iconText: "text-amber-600",
      iconHover: "group-hover:bg-amber-500",
      iconHoverText: "group-hover:text-white",
      titleHover: "group-hover:text-amber-700",
      button: "text-amber-600",
      buttonHover: "hover:text-amber-800",
      badge: "bg-amber-50 text-amber-700",
      shadow: "hover:shadow-amber-100",
    },
  };

  const handleViewReport = async (report) => {
    setPopupTitle(report.title);

    // No file uploaded
    if (!report.file) {
      setPopupOpen(true);
      return;
    }

    // Works on localhost and GitHub Pages
    const fileUrl = `${import.meta.env.BASE_URL}${report.file}`;

    try {
      const response = await fetch(fileUrl, {
        method: "HEAD",
        cache: "no-store",
      });

      if (!response.ok) {
        setPopupOpen(true);
        return;
      }

      window.open(
        fileUrl,
        "_blank",
        "noopener,noreferrer"
      );
    } catch (error) {
      setPopupOpen(true);
    }
  };

  return (
    <div className="bg-slate-50">

      {/* ACCOUNTABILITY SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="relative overflow-hidden bg-white p-7 md:p-10 rounded-3xl border border-emerald-100 shadow-lg">

          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl"></div>

          {/* HEADER */}
          <div className="relative text-center mb-10">

            <span className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 mb-3">
              Transparency & Trust
            </span>

            <h1 className="text-3xl md:text-4xl font-black text-emerald-950">
              Accountability, Transparency & Audits
            </h1>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-emerald-600"></div>

            <p className="mt-5 text-base text-gray-600 max-w-2xl mx-auto leading-7">
              PIDO is committed to accountability, transparency, responsible
              resource management, and applicable civil society requirements.
            </p>

          </div>

          {/* REPORTS */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {reports.map((report, index) => {
              const c = colors[report.color];

              return (
                <div
                  key={report.title}
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

                    p-5
                    md:p-6

                    shadow-sm
                    ${c.shadow}

                    transition-all
                    duration-500

                    hover:-translate-y-2

                    animate-[reportIn_0.7s_ease-out_both]
                  `}
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >

                  {/* REPORT HEADER */}
                  <div className="flex items-start justify-between gap-4">

                    {/* Icon */}
                    <div
                      className={`
                        w-14
                        h-14
                        shrink-0
                        rounded-2xl

                        ${c.iconBg}
                        ${c.iconText}

                        flex
                        items-center
                        justify-center

                        text-2xl

                        ${c.iconHover}
                        ${c.iconHoverText}

                        group-hover:scale-110
                        group-hover:rotate-3

                        transition-all
                        duration-500
                      `}
                    >
                      {report.icon}
                    </div>

                    {/* Number */}
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

                  {/* REPORT TITLE */}
                  <h3
                    className={`
                      mt-5
                      text-lg
                      font-bold
                      text-slate-900
                      ${c.titleHover}
                      transition-colors
                      duration-300
                    `}
                  >
                    {report.title}
                  </h3>

                  {/* Status */}
                  <div className="mt-3">
                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        ${c.badge}
                      `}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      Official Document
                    </span>
                  </div>

                  {/* VIEW BUTTON */}
                  <button
                    type="button"
                    onClick={() => handleViewReport(report)}
                    className={`
                      mt-5
                      inline-flex
                      items-center
                      gap-2

                      ${c.button}
                      ${c.buttonHover}

                      text-sm
                      font-bold

                      transition-all
                      duration-300

                      group-hover:translate-x-1
                    `}
                  >
                    View Report
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* POPUP MODAL */}
      {popupOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9999]

            flex
            items-center
            justify-center

            px-4

            bg-slate-950/60
            backdrop-blur-sm

            animate-[fadeIn_0.25s_ease-out]
          "
          onClick={() => setPopupOpen(false)}
        >

          <div
            className="
              relative
              w-full
              max-w-md

              bg-white

              rounded-3xl

              shadow-2xl

              p-7
              md:p-8

              text-center

              animate-[modalIn_0.35s_ease-out]
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* TOP ACCENT */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500 rounded-t-3xl"></div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              aria-label="Close notification"
              className="
                absolute
                right-4
                top-4

                w-9
                h-9

                rounded-full

                bg-gray-100
                text-gray-500

                hover:bg-gray-200
                hover:text-gray-900

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:rotate-90
              "
            >
              ✕
            </button>

            {/* ICON */}
            <div
              className="
                mx-auto
                w-16
                h-16

                rounded-2xl

                bg-emerald-50
                text-emerald-600

                flex
                items-center
                justify-center

                text-2xl

                shadow-sm
              "
            >
              📄
            </div>

            {/* TITLE */}
            <h2 className="mt-5 text-xl md:text-2xl font-black text-emerald-950">
              Report Not Available
            </h2>

            {/* MESSAGE */}
            <p className="mt-3 text-base text-gray-600 leading-7">
              The{" "}
              <span className="font-bold text-emerald-700">
                {popupTitle}
              </span>{" "}
              will be made available here when the final publication file is
              uploaded.
            </p>

            {/* OK */}
            <button
              type="button"
              onClick={() => setPopupOpen(false)}
              className="
                mt-7

                px-7
                py-2.5

                rounded-xl

                bg-emerald-600
                text-white

                font-bold

                hover:bg-emerald-700

                hover:shadow-lg
                hover:shadow-emerald-200

                transition-all
                duration-300

                hover:-translate-y-0.5
              "
            >
              OK
            </button>

          </div>

        </div>
      )}

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes reportIn {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          @keyframes modalIn {
            from {
              opacity: 0;
              transform: scale(0.92) translateY(15px);
            }

            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>

    </div>
  );
}

export default Accountability;
