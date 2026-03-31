import React from "react";

const Navbar = () => {
  const features = [
    "Meetings",
    "Webinars",
    "Cohorts",
    "Courses",
    "Priority DM",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LEFT : LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">&lt;</span>
            </div>

            <span className="text-white text-xl font-semibold">
              topmate
            </span>
          </div>

          {/* CENTER : NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">

            {/* PRODUCTS */}
            <div className="relative group">

              <button className="text-white bg-white/10 px-4 py-1 rounded-full text-sm hover:bg-white/20 transition">
                Products ▾
              </button>

              {/* MEGA MENU */}
              <div
                className="absolute left-1/2 top-12 -translate-x-1/2 w-[900px]
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-300"
              >
                <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 shadow-2xl">

                  <div className="grid grid-cols-3 gap-8">

                    {/* COLUMN 1 : FEATURES */}
                    <div>
                      <h4 className="text-gray-400 text-xs mb-4">
                        FEATURES
                      </h4>

                      <div className="space-y-1">
                        {features.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer transition"
                          >
                            <div className="w-8 h-8 bg-white/10 rounded-md" />

                            <div>
                              <p className="text-white text-sm">
                                {item}
                              </p>

                              <p className="text-gray-400 text-xs">
                                Sample description
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* COLUMN 2-3 : ECOSYSTEM CARD */}
                    <div className="col-span-2 bg-white/5 rounded-xl p-4">
                      <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4" />

                      <h4 className="text-white text-sm mb-2">
                        TOPMATE ECOSYSTEM
                      </h4>

                      <p className="text-gray-400 text-xs mb-4">
                        Everything you need to turn your knowledge
                        into a global business.
                      </p>

                      <button className="text-blue-400 text-sm hover:underline">
                        Explore All Tools →
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* OTHER LINKS */}
            <button className="text-gray-300 hover:text-white text-sm">
              Use Cases ▾
            </button>

            <button className="text-gray-300 hover:text-white text-sm">
              Search
            </button>

            <button className="text-gray-300 hover:text-white text-sm">
              Pricing
            </button>

          </div>

          {/* RIGHT : DASHBOARD */}
          <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
            Dashboard
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;