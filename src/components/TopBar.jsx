function TopBar() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-9 flex items-center justify-between">

          {/* Left: Regional Hub */}
          <div className="text-xs text-gray-300">
            Regional Hub:
            <span className="font-semibold ml-1 text-white">
              Mekelle, Tigray
            </span>
          </div>

          {/* Right: Search + Sign In */}
          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-52 h-7 px-3 pr-8 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs"
              />

              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                🔍
              </span>
            </div>

            {/* Sign In */}
            <button className="text-xs font-medium text-gray-300 hover:text-white transition">
              👤 Sign In
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default TopBar;