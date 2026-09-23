function Footer({ goToPage }) {
  return (
    <footer className="bg-emerald-950 text-gray-400 mt-auto">

      {/* TOP ACCENT */}
      <div className="h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-amber-400"></div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ================= BRAND ================= */}
          <div className="lg:pr-6">

            <div className="flex items-center gap-3">

              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                <img
                  src="/logo.png"
                  alt="PIDO Logo"
                  className="h-11 w-auto object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-black text-white">
                  PIDO Ethiopia
                </h3>

                <p className="text-[10px] uppercase tracking-[0.18em] text-emerald-400 font-bold mt-1">
                  Inclusive Development
                </p>
              </div>

            </div>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              Registered national civil society organization dedicated to
              empowering vulnerable communities, improving local capacities,
              and protecting basic human dignity.
            </p>

            {/* Brand line */}
            <div className="mt-6 flex items-center gap-2">
              <div className="h-1 w-10 rounded-full bg-emerald-500"></div>
              <div className="h-1 w-5 rounded-full bg-amber-400"></div>
            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <button
                  onClick={() => goToPage("overview")}
                  className="
                    group flex items-center gap-2
                    hover:text-emerald-400
                    transition-colors duration-300
                  "
                >
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToPage("disability")}
                  className="
                    group flex items-center gap-2
                    hover:text-emerald-400
                    transition-colors duration-300
                  "
                >
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Programs & Sectors
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToPage("impact")}
                  className="
                    group flex items-center gap-2
                    hover:text-emerald-400
                    transition-colors duration-300
                  "
                >
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Our Impact
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToPage("donate")}
                  className="
                    group flex items-center gap-2
                    hover:text-amber-400
                    transition-colors duration-300
                  "
                >
                  <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Donate
                </button>
              </li>

            </ul>

          </div>


          {/* ================= LEGAL ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-6">
              Legal Frameworks
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <button
                  className="
                    group flex items-center gap-2
                    hover:text-emerald-400
                    transition-colors duration-300
                  "
                >
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Privacy Policy
                </button>
              </li>

              <li>
                <button
                  className="
                    group flex items-center gap-2
                    hover:text-emerald-400
                    transition-colors duration-300
                  "
                >
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Terms of Use
                </button>
              </li>

              <li>
                <button
                  onClick={() => goToPage("policies")}
                  className="
                    group flex items-center gap-2
                    hover:text-emerald-400
                    transition-colors duration-300
                  "
                >
                  <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  Safeguarding Statement
                </button>
              </li>

            </ul>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-6">
              Contact
            </h3>

            <ul className="space-y-5 text-sm text-gray-400">

              {/* Office */}
              <li className="flex gap-3">

                <span className="shrink-0 w-9 h-9 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center">
                  ⌂
                </span>

                <div>
                  <span className="block text-gray-200 font-bold mb-1">
                    Office
                  </span>
                  Addis Ababa / Mekelle, Ethiopia
                </div>

              </li>


              {/* Phone */}
              <li className="flex gap-3">

                <span className="shrink-0 w-9 h-9 rounded-xl bg-amber-900/30 text-amber-400 flex items-center justify-center">
                  ☎
                </span>

                <div>
                  <span className="block text-gray-200 font-bold mb-1">
                    Phone
                  </span>

                  <a
                    href="tel:+251914832426"
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    +251 914 83 24 26
                  </a>
                </div>

              </li>


              {/* Email */}
              <li className="flex gap-3">

                <span className="shrink-0 w-9 h-9 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center">
                  ✉
                </span>

                <div>
                  <span className="block text-gray-200 font-bold mb-1">
                    Email
                  </span>

                  <a
                    href="mailto:berhanehad@gmail.com"
                    className="hover:text-emerald-400 transition-colors duration-300 break-all"
                  >
                    berhanehad@gmail.com
                  </a>
                </div>

              </li>

            </ul>

          </div>

        </div>
      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-emerald-900/70 bg-emerald-950/80">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">

            <p className="text-xs text-gray-500">
              © 2026 PIDO Ethiopia. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Inclusive</span>
              <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
              <span>Accountable</span>
              <span className="w-1 h-1 rounded-full bg-amber-400"></span>
              <span>Community-Focused</span>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;