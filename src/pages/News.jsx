function News() {
  const news = [
    {
      image: "/bacground.png",
      alt: "PIDO Field Activity",
      category: "FIELD UPDATE",
      title: "Community Support Program Launched",
      date: "August 2024",
      color: "emerald",
    },
    {
      image: "/gere gift.png",
      alt: "Education Program",
      category: "PROGRAM",
      title: "Inclusive Education Initiative",
      date: "July 2025",
      color: "amber",
    },
    {
      image: "/gift.png",
      alt: "Humanitarian Response",
      category: "HUMANITARIAN",
      title: "Emergency Response Activities",
      date: "November 2025",
      color: "emerald",
    },
  ];

  const gallery = [
    {
      image: "/pido.jpg",
      alt: "PIDO Gallery",
    },
    {
      image: "/gift.png",
      alt: "PIDO Activity",
    },
    {
      image: "/gere gift.png",
      alt: "PIDO Program",
    },
  ];

  const colors = {
    emerald: {
      border: "border-emerald-500",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-700",
      titleHover: "group-hover:text-emerald-700",
      arrow: "text-emerald-600",
      shadow: "hover:shadow-emerald-100",
    },
    amber: {
      border: "border-amber-500",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-700",
      titleHover: "group-hover:text-amber-700",
      arrow: "text-amber-600",
      shadow: "hover:shadow-amber-100",
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">

      {/* ==================== LATEST NEWS ==================== */}
      <section>
        <div className="relative mb-10">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            News & Updates
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
            Latest News & Field Updates
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>

          <p className="mt-4 max-w-2xl text-gray-600 leading-7">
            Stay informed about PIDO's programs, community activities,
            humanitarian response, and recent developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {news.map((item, index) => {
            const c = colors[item.color];

            return (
              <article
                key={item.title}
                className={`
                  group overflow-hidden
                  bg-white
                  rounded-3xl
                  border border-gray-100
                  border-t-4 ${c.border}
                  shadow-sm ${c.shadow}
                  transition-all duration-500
                  hover:-translate-y-2
                  animate-[newsIn_0.7s_ease-out_both]
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"></div>

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`
                        inline-flex items-center gap-2
                        ${c.badgeBg} ${c.badgeText}
                        px-3 py-1.5
                        rounded-full
                        text-[10px]
                        font-black
                        tracking-wide
                      `}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {item.category}
                    </span>
                  </div>

                  {/* Date */}
                  <span className="absolute bottom-4 left-4 text-xs font-semibold text-white">
                    {item.date}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`
                      font-bold text-lg md:text-xl
                      text-slate-900
                      ${c.titleHover}
                      transition-colors duration-300
                    `}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={`
                      mt-5 flex items-center gap-2
                      ${c.arrow}
                      text-sm font-bold
                      group-hover:translate-x-1
                      transition-transform duration-300
                    `}
                  >
                    Read Update
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}

        </div>
      </section>


      {/* ==================== PHOTO GALLERY ==================== */}
      <section>
        <div className="relative mb-10">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Our Moments
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
            Photo Gallery
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>

          <p className="mt-4 max-w-2xl text-gray-600 leading-7">
            A glimpse into PIDO's activities, community engagement, and
            program implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {gallery.map((item, index) => (
            <div
              key={item.image}
              className="
                group relative overflow-hidden
                rounded-2xl
                border-4 border-white
                shadow-md
                hover:shadow-xl
                transition-all duration-500
                hover:-translate-y-2
                animate-[galleryIn_0.7s_ease-out_both]
              "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={item.image}
                className="
                  w-full h-72 object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
                alt={item.alt}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-5 left-5 right-5 text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs font-bold uppercase tracking-wider">
                  PIDO Activity
                </span>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* ==================== REPORTS ==================== */}
      <section>
        <div className="relative mb-10">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Resources
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mt-2">
            Reports & Publications
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-600 to-amber-400"></div>

          <p className="mt-4 max-w-2xl text-gray-600 leading-7">
            Access selected publications and documents highlighting PIDO's
            activities and partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Report Card */}
          <div
            className="
              group relative overflow-hidden
              bg-white
              border border-gray-100
              border-l-4 border-emerald-500
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-emerald-100
              hover:-translate-y-2
              transition-all duration-500
            "
          >
            {/* Icon */}
            <div className="
              w-14 h-14
              rounded-2xl
              bg-emerald-100
              text-emerald-600
              flex items-center justify-center
              text-2xl
              group-hover:bg-emerald-600
              group-hover:text-white
              group-hover:scale-110
              group-hover:rotate-3
              transition-all duration-500
            ">
              📕
            </div>

            <h3 className="font-bold text-xl text-slate-900 mt-5 group-hover:text-emerald-700 transition-colors">
              Gratitude Letter
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-6">
              Gratitude from Sewhi Negus School.
            </p>

            <span className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
              Publication
            </span>

            <div className="mt-5">
              <a
                href="/supportive letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  bg-emerald-600
                  hover:bg-emerald-700
                  text-white
                  px-5 py-2.5
                  rounded-xl
                  text-sm font-bold
                  hover:shadow-lg
                  hover:shadow-emerald-200
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                View PDF
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* Animations */}
      <style>
        {`
          @keyframes newsIn {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes galleryIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

    </section>
  );
}

export default News;