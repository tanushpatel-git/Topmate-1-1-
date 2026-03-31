import React, { useState, useRef } from "react";
import { Link } from "react-router";

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimer = useRef(null);

  const features = [
    { name: "Meetings", linkPos: "/features/meeting" },
    { name: "Webinars", linkPos: "/features/webinar" },
    { name: "Cohorts", linkPos: "/features/cohort" },
    { name: "Courses", linkPos: "/features/course" },
    { name: "Priority DM", linkPos: "/features/priority-dm" },
  ];

  const useCases = [
    { name: "Product Management", linkPos: "/use-cases/product-management" },
    { name: "Ai & Ml", linkPos: "/use-cases/ai-ml" },
    { name: "Software Engineering", linkPos: "/use-cases/software-engineer" },
    { name: "Data Science", linkPos: "/use-cases/data-science" },
    { name: "Design (Ux & Ui)", linkPos: "/use-cases/design" }
  ];

  const menuData = activeMenu === "features" ? features : useCases;

  const openMenu = (menu) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 500);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="text-white text-xl font-semibold">
            topmate
          </Link>

          {/* CENTER */}
          <div className="hidden md:flex items-center gap-8 relative">

            {/* PRODUCTS */}
            <div
              onMouseEnter={() => openMenu("features")}
              onMouseLeave={closeMenu}
            >
              <button className="text-white bg-white/10 px-4 py-1 rounded-full text-sm">
                Products ▾
              </button>
            </div>

            {/* USE CASES */}
            <div
              onMouseEnter={() => openMenu("usecases")}
              onMouseLeave={closeMenu}
            >
              <button className="text-gray-300 hover:text-white text-sm">
                Use Cases ▾
              </button>
            </div>

            {/* SEARCH */}
            <button className="text-gray-300 hover:text-white text-sm">
              Search
            </button>

            {/* PRICING */}
            <button className="text-gray-300 hover:text-white text-sm">
              Pricing
            </button>

            {/* MEGA MENU */}
            {activeMenu && (
              <div
                onMouseEnter={() => clearTimeout(closeTimer.current)}
                onMouseLeave={closeMenu}
                className="absolute left-1/2 top-12 -translate-x-1/2 w-[900px]"
              >
                <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 shadow-2xl">

                  <div className="grid grid-cols-3 gap-8">

                    {/* MENU LIST */}
                    <div>
                      <h4 className="text-gray-400 text-xs mb-4 uppercase">
                        {activeMenu === "features" ? "Features" : "Use Cases"}
                      </h4>

                      <div className="space-y-1">
                        {menuData.map((item, index) => (
                          <Link
                            key={index}
                            to={item.linkPos}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition"
                          >
                            <div className="w-8 h-8 bg-white/10 rounded-md" />

                            <div>
                              <h4 className="text-white text-sm">
                                {item.name}
                              </h4>

                              <p className="text-gray-400 text-xs">
                                Sample description
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT CARD */}
                    {activeMenu === "features" && (
                      <div className="col-span-2 bg-white/5 rounded-xl p-4">

                        <div className="h-32 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg mb-4" />

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
                    )}

                    {activeMenu === "usecases" && (
                      <div className="col-span-2 bg-white/5 rounded-xl p-4">

                        <div className="h-32 bg-linear-to-r from-orange-500 to-pink-500 rounded-lg mb-4" />

                        <h4 className="text-white text-sm mb-2">
                          TOPMATE Use Case
                        </h4>

                        <p className="text-gray-400 text-xs mb-4">
                          The thing which turn u into an expert by kowning use cases
                        </p>

                        <button className="text-blue-400 text-sm hover:underline">
                          Explore All Use Case →
                        </button>

                      </div>
                    )}

                  </div>

                </div>
              </div>
            )}

          </div>

          {/* DASHBOARD */}
          <button className="bg-white text-black px-5 py-2 rounded-lg">
            Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;