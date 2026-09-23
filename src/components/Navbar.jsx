import { useEffect, useRef, useState } from "react";

// =============================================================
// NAVIGATION DATA
// =============================================================

const ABOUT_SECTIONS = [
  {
    category: "Organization",
    icon: "◈",
    description: "Learn about PIDO",
    items: [
      {
        icon: "→",
        title: "Organization Overview",
        page: "overview",
      },
      {
        icon: "◎",
        title: "Vision & Mission",
        page: "vision",
      },
      {
        icon: "✓",
        title: "Core Values",
        page: "values",
      },
      {
        icon: "↗",
        title: "Core Approaches",
        page: "approaches",
      },
      {
        icon: "◷",
        title: "Our History",
        page: "history",
      },
    ],
  },

  {
    category: "Governance",
    icon: "⚖",
    description: "Transparency & accountability",
    items: [
      {
        icon: "⌖",
        title: "Where We Work",
        page: "where",
      },
      {
        icon: "✓",
        title: "Accountability & Reports",
        page: "accountability",
      },
      {
        icon: "▣",
        title: "Institutional Policies",
        page: "policies",
      },
    ],
  },
];

const WORK_SECTIONS = [
  {
    category: "Core Programs",
    icon: "🌱",
    description: "Our key areas of work",
    items: [
      {
        icon: "♿",
        title: "Disability Development & Inclusion",
        page: "disability",
      },
      {
        icon: "🚀",
        title: "Youth Leadership & Empowerment",
        page: "youth",
      },
      {
        icon: "🎓",
        title: "Education & Child Development",
        page: "education",
      },
      {
        icon: "💧",
        title: "WASH Program",
        page: "wash",
      },
    ],
  },

  {
    category: "Development Areas",
    icon: "🌍",
    description: "Building resilient communities",
    items: [
      {
        icon: "🌾",
        title: "Food Security, Health & Nutrition",
        page: "food",
      },
      {
        icon: "🌍",
        title: "Climate Resilience",
        page: "climate",
      },
      {
        icon: "🤝",
        title: "Peacebuilding & Social Cohesion",
        page: "peace",
      },
      {
        icon: "⚖",
        title: "Civic Engagement & Governance",
        page: "governance",
      },
      {
        icon: "🚑",
        title: "Humanitarian Relief & DRR",
        page: "humanitarian",
      },
    ],
  },
];

// =============================================================
// NAVBAR
// =============================================================

function Navbar({ currentTab, goToPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  const navRef = useRef(null);

  // ===========================================================
  // BODY SCROLL LOCK
  // ===========================================================

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // ===========================================================
  // OUTSIDE CLICK
  // ===========================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setAboutOpen(false);
        setWorkOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // ===========================================================
  // ESCAPE KEY
  // ===========================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setAboutOpen(false);
        setWorkOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // ===========================================================
  // NAVIGATION
  // ===========================================================

  const navigate = (page) => {
    // Close every menu immediately
    setMobileMenuOpen(false);
    setAboutOpen(false);
    setWorkOpen(false);

    // Send selected page to App.jsx
    if (typeof goToPage === "function") {
      goToPage(page);
    }

    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  // ===========================================================
  // ABOUT TOGGLE
  // ===========================================================

  const toggleAbout = (event) => {
    if (event) {
      event.stopPropagation();
    }

    setAboutOpen((previous) => !previous);
    setWorkOpen(false);
  };

  // ===========================================================
  // WORK TOGGLE
  // ===========================================================

  const toggleWork = (event) => {
    if (event) {
      event.stopPropagation();
    }

    setWorkOpen((previous) => !previous);
    setAboutOpen(false);
  };

  // ===========================================================
  // MOBILE MENU TOGGLE
  // ===========================================================

  const toggleMobileMenu = (event) => {
    if (event) {
      event.stopPropagation();
    }

    setMobileMenuOpen((previous) => !previous);

    setAboutOpen(false);
    setWorkOpen(false);
  };

  // ===========================================================
  // RENDER
  // ===========================================================

  return (
    <>
      {/* =======================================================
          MOBILE BACKDROP
      ======================================================= */}

      {mobileMenuOpen && (
        <div
          className="
            fixed
            inset-0
            bg-slate-900/40
            backdrop-blur-[2px]
            z-40
            lg:hidden
            animate-[fadeIn_0.2s_ease-out]
          "
          onClick={() => {
            setMobileMenuOpen(false);
            setAboutOpen(false);
            setWorkOpen(false);
          }}
          aria-hidden="true"
        />
      )}

      {/* =======================================================
          HEADER
      ======================================================= */}

      <header
        ref={navRef}
        className="
          sticky
          top-0
          z-50
          bg-white/95
          backdrop-blur-md
          border-b
          border-slate-100
          shadow-sm
        "
      >
        <div
          className="
            max-w-[1500px]
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* ===================================================
              DESKTOP NAVBAR
          =================================================== */}

          <div
            className="
              hidden
              lg:flex
              min-h-[82px]
              items-center
              justify-between
              gap-8
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <button
              type="button"
              onClick={() => navigate("home")}
              className="
                flex
                items-center
                gap-3
                flex-shrink-0
                group
              "
              aria-label="Go to homepage"
            >
              <img
                src="/logo.png"
                alt="PIDO Logo"
                className="
                  h-[62px]
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />

              <div className="hidden xl:block text-left">
                <div
                  className="
                    text-lg
                    font-extrabold
                    text-slate-900
                    leading-tight
                  "
                >
                  PIDO
                </div>

                <div
                  className="
                    text-[10px]
                    text-slate-500
                    font-medium
                    leading-tight
                    max-w-[230px]
                  "
                >
                  Prime for an Inclusive and Developmental
                  Organization
                </div>
              </div>
            </button>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                flex
                items-center
                gap-1
              "
              aria-label="Main Navigation"
            >
              {/* HOME */}

              <NavButton
                label="Home"
                active={currentTab === "home"}
                onClick={() => navigate("home")}
              />

              {/* =================================================
                  ABOUT US
              ================================================= */}

              <div className="relative">
                <button
                  type="button"
                  onClick={toggleAbout}
                  aria-expanded={aboutOpen}
                  aria-haspopup="true"
                  className={`
                    relative
                    flex
                    items-center
                    gap-2
                    px-4
                    py-3
                    rounded-xl
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-wide
                    transition-all
                    duration-200

                    ${
                      aboutOpen
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50"
                    }
                  `}
                >
                  <span>About Us</span>

                  <Chevron open={aboutOpen} />
                </button>

                {/* ABOUT DROPDOWN */}

                {aboutOpen && (
                  <div
                    className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-full
                      mt-3
                      w-[560px]
                      max-w-[calc(100vw-32px)]
                      bg-white
                      rounded-2xl
                      border
                      border-slate-100
                      shadow-[0_20px_60px_rgba(15,23,42,0.15)]
                      p-5
                      animate-[dropdownIn_0.18s_ease-out]
                    "
                  >
                    {/* Arrow */}

                    <div
                      className="
                        absolute
                        -top-2
                        left-1/2
                        -translate-x-1/2
                        w-4
                        h-4
                        bg-white
                        border-l
                        border-t
                        border-slate-100
                        rotate-45
                      "
                    />

                    <div
                      className="
                        relative
                        grid
                        grid-cols-2
                        gap-6
                      "
                    >
                      {ABOUT_SECTIONS.map(
                        (section) => (
                          <div
                            key={section.category}
                          >
                            <DropdownHeading
                              icon={section.icon}
                              title={section.category}
                              description={
                                section.description
                              }
                            />

                            {section.items.map(
                              (item) => (
                                <DropdownItem
                                  key={item.page}
                                  icon={item.icon}
                                  title={item.title}
                                  onClick={() =>
                                    navigate(
                                      item.page
                                    )
                                  }
                                />
                              )
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* =================================================
                  OUR WORK
              ================================================= */}

              <div className="relative">
                <button
                  type="button"
                  onClick={toggleWork}
                  aria-expanded={workOpen}
                  aria-haspopup="true"
                  className={`
                    relative
                    flex
                    items-center
                    gap-2
                    px-4
                    py-3
                    rounded-xl
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-wide
                    transition-all
                    duration-200

                    ${
                      workOpen
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50"
                    }
                  `}
                >
                  <span>Our Work</span>

                  <Chevron open={workOpen} />
                </button>

                {/* OUR WORK DROPDOWN */}

                {workOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      top-full
                      mt-3
                      w-[700px]
                      max-w-[calc(100vw-32px)]
                      bg-white
                      rounded-2xl
                      border
                      border-slate-100
                      shadow-[0_20px_60px_rgba(15,23,42,0.15)]
                      p-6
                      animate-[dropdownIn_0.18s_ease-out]
                    "
                  >
                    {/* Arrow */}

                    <div
                      className="
                        absolute
                        -top-2
                        right-28
                        w-4
                        h-4
                        bg-white
                        border-l
                        border-t
                        border-slate-100
                        rotate-45
                      "
                    />

                    <div
                      className="
                        relative
                        grid
                        grid-cols-2
                        gap-8
                      "
                    >
                      {WORK_SECTIONS.map(
                        (section) => (
                          <div
                            key={section.category}
                          >
                            <DropdownHeading
                              icon={section.icon}
                              title={section.category}
                              description={
                                section.description
                              }
                            />

                            {section.items.map(
                              (item) => (
                                <DropdownItem
                                  key={item.page}
                                  icon={item.icon}
                                  title={item.title}
                                  onClick={() =>
                                    navigate(
                                      item.page
                                    )
                                  }
                                />
                              )
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* IMPACT */}

              <NavButton
                label="Impact"
                active={currentTab === "impact"}
                onClick={() => navigate("impact")}
              />

              {/* NEWS */}

              <NavButton
                label="News"
                active={currentTab === "news"}
                onClick={() => navigate("news")}
              />

              {/* CONTACT */}

              <NavButton
                label="Contact"
                active={currentTab === "contact"}
                onClick={() => navigate("contact")}
              />

              {/* DONATE */}

              <button
                type="button"
                onClick={() => navigate("donate")}
                className="
                  ml-2
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  bg-emerald-600
                  text-white
                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-wide
                  shadow-md
                  hover:bg-emerald-700
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  transition-all
                  duration-200
                "
              >
                <span aria-hidden="true">
                  ♥
                </span>

                Donate
              </button>
            </nav>
          </div>

          {/* ===================================================
              MOBILE HEADER
          =================================================== */}

          <div
            className="
              lg:hidden
              min-h-[72px]
              flex
              items-center
              justify-between
            "
          >
            {/* MOBILE LOGO */}

            <button
              type="button"
              onClick={() => navigate("home")}
              className="
                flex
                items-center
                gap-3
                group
              "
              aria-label="Go to homepage"
            >
              <img
                src="/logo.png"
                alt="PIDO Logo"
                className="
                  h-12
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />

              <div className="text-left">
                <div
                  className="
                    font-extrabold
                    text-slate-900
                  "
                >
                  PIDO
                </div>

                <div
                  className="
                    text-[9px]
                    text-slate-500
                    max-w-[180px]
                    leading-tight
                  "
                >
                  Prime for an Inclusive and
                  Developmental Organization
                </div>
              </div>
            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="
                w-11
                h-11
                flex
                items-center
                justify-center
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                hover:bg-slate-50
                hover:border-emerald-200
                transition
              "
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    d="M6 6l12 12"
                  />

                  <path
                    strokeLinecap="round"
                    d="M18 6L6 18"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    d="M4 6h16"
                  />

                  <path
                    strokeLinecap="round"
                    d="M4 12h16"
                  />

                  <path
                    strokeLinecap="round"
                    d="M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* ===================================================
              MOBILE MENU
          =================================================== */}

          {mobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="
                lg:hidden
                border-t
                border-slate-100
                py-4
                max-h-[calc(100vh-80px)]
                overflow-y-auto
                relative
                z-50
              "
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="space-y-1">

                {/* HOME */}

                <MobileNavItem
                  title="Home"
                  onClick={() =>
                    navigate("home")
                  }
                />

                {/* =================================================
                    ABOUT
                ================================================= */}

                <MobileNavItem
                  title="About Us"
                  dropdown
                  open={aboutOpen}
                  onClick={toggleAbout}
                />

                {aboutOpen && (
                  <div
                    className="
                      ml-4
                      pl-3
                      border-l-2
                      border-emerald-100
                      space-y-1
                      my-1
                    "
                  >
                    {ABOUT_SECTIONS
                      .flatMap(
                        (section) =>
                          section.items
                      )
                      .map((item) => (
                        <MobileSubItem
                          key={item.page}
                          title={item.title}
                          onClick={() =>
                            navigate(
                              item.page
                            )
                          }
                        />
                      ))}
                  </div>
                )}

                {/* =================================================
                    OUR WORK
                ================================================= */}

                <MobileNavItem
                  title="Our Work"
                  dropdown
                  open={workOpen}
                  onClick={toggleWork}
                />

                {workOpen && (
                  <div
                    className="
                      ml-4
                      pl-3
                      border-l-2
                      border-emerald-100
                      space-y-1
                      my-1
                    "
                  >
                    {WORK_SECTIONS
                      .flatMap(
                        (section) =>
                          section.items
                      )
                      .map((item) => (
                        <MobileSubItem
                          key={item.page}
                          title={item.title}
                          onClick={() =>
                            navigate(
                              item.page
                            )
                          }
                        />
                      ))}
                  </div>
                )}

                {/* IMPACT */}

                <MobileNavItem
                  title="Impact"
                  onClick={() =>
                    navigate("impact")
                  }
                />

                {/* NEWS */}

                <MobileNavItem
                  title="News"
                  onClick={() =>
                    navigate("news")
                  }
                />

                {/* CONTACT */}

                <MobileNavItem
                  title="Contact"
                  onClick={() =>
                    navigate("contact")
                  }
                />

                {/* DONATE */}

                <button
                  type="button"
                  onClick={() =>
                    navigate("donate")
                  }
                  className="
                    w-full
                    mt-3
                    px-5
                    py-3.5
                    rounded-xl
                    bg-emerald-600
                    text-white
                    font-extrabold
                    hover:bg-emerald-700
                    shadow-md
                    transition
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <span aria-hidden="true">
                    ♥
                  </span>

                  Donate
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

// =============================================================
// DESKTOP NAV BUTTON
// =============================================================

function NavButton({
  label,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative
        px-4
        py-3
        rounded-xl
        text-[12px]
        font-bold
        uppercase
        tracking-wide
        transition-all
        duration-200

        ${
          active
            ? "text-emerald-700 bg-emerald-50"
            : "text-slate-600 hover:text-emerald-700 hover:bg-slate-50"
        }
      `}
    >
      {label}

      {active && (
        <span
          className="
            absolute
            bottom-1
            left-1/2
            -translate-x-1/2
            w-5
            h-0.5
            rounded-full
            bg-emerald-600
          "
        />
      )}
    </button>
  );
}

// =============================================================
// CHEVRON
// =============================================================

function Chevron({ open }) {
  return (
    <svg
      className={`
        w-3.5
        h-3.5
        transition-transform
        duration-200
        ${open ? "rotate-180" : ""}
      `}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="
          M5.23 7.21
          a.75.75 0 011.06.02
          L10 11.17
          l3.71-3.94
          a.75.75 0 01.08 1.04
          l-4.25 4.51
          a.75.75 0 01-1.08 0
          L5.25 8.27
          a.75.75 0 01-.02-1.06
          l.02-.02z
        "
        clipRule="evenodd"
      />
    </svg>
  );
}

// =============================================================
// DROPDOWN HEADING
// =============================================================

function DropdownHeading({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        px-2
        mb-3
      "
    >
      <div
        className="
          w-9
          h-9
          rounded-xl
          bg-emerald-50
          text-emerald-600
          flex
          items-center
          justify-center
          text-sm
        "
        aria-hidden="true"
      >
        {icon}
      </div>

      <div>
        <h3
          className="
            text-xs
            font-extrabold
            text-slate-900
            uppercase
            tracking-wider
          "
        >
          {title}
        </h3>

        <p
          className="
            text-[10px]
            text-slate-400
            mt-0.5
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// =============================================================
// DESKTOP DROPDOWN ITEM
// =============================================================

function DropdownItem({
  icon,
  title,
  onClick,
}) {
  const handleClick = (event) => {
    event.stopPropagation();

    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        group
        w-full
        flex
        items-center
        gap-3
        px-3
        py-2.5
        rounded-xl
        text-left
        text-[13px]
        text-slate-600
        hover:text-emerald-700
        hover:bg-emerald-50
        transition-all
        duration-150
      "
    >
      <span
        className="
          w-7
          h-7
          flex
          items-center
          justify-center
          rounded-lg
          bg-slate-50
          text-slate-400
          text-xs
          group-hover:bg-white
          group-hover:text-emerald-600
          transition
        "
        aria-hidden="true"
      >
        {icon}
      </span>

      <span
        className="
          font-medium
          flex-1
        "
      >
        {title}
      </span>

      <span
        className="
          text-slate-300
          group-hover:text-emerald-500
          group-hover:translate-x-0.5
          transition
        "
        aria-hidden="true"
      >
        →
      </span>
    </button>
  );
}

// =============================================================
// MOBILE NAV ITEM
// =============================================================

function MobileNavItem({
  title,
  onClick,
  dropdown = false,
  open = false,
}) {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();

        if (typeof onClick === "function") {
          onClick(event);
        }
      }}
      className="
        w-full
        flex
        items-center
        justify-between
        px-4
        py-3
        rounded-xl
        text-sm
        font-semibold
        text-slate-700
        hover:text-emerald-700
        hover:bg-emerald-50
        transition
      "
    >
      <span>{title}</span>

      {dropdown && (
        <Chevron open={open} />
      )}
    </button>
  );
}

// =============================================================
// MOBILE SUB ITEM
// =============================================================

function MobileSubItem({
  title,
  onClick,
}) {
  const handleClick = (event) => {
    // Important:
    // Prevent the click from bubbling to the mobile menu.
    event.stopPropagation();

    // Execute the navigation function.
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        w-full
        text-left
        px-3
        py-2.5
        rounded-lg
        text-sm
        text-slate-600
        hover:text-emerald-700
        hover:bg-emerald-50
        transition-colors
        duration-200
      "
    >
      {title}
    </button>
  );
}

// =============================================================
// EXPORT
// =============================================================

export default Navbar;