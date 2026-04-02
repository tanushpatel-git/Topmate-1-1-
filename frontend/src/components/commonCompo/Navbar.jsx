import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Navbar = ({ theam = "white" }) => {

  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimer = useRef(null);
  const [hoverItem, setHoverItem] = useState("products");

  const isDark = theam === "black";

  const navBg = isDark ? "bg-black border-white/10" : "bg-white border-black/10";
  const textMain = isDark ? "text-white" : "text-black";
  const dropdownBg = isDark ? "bg-[#0b0b0b] border-white/10" : "bg-white border-black/10";
  const cardBg = isDark ? "bg-white/5" : "bg-black/5";
  const buttonPrimary = isDark ? "bg-white text-black" : "bg-black text-white";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBg} border-b`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className={`${textMain} text-xl font-semibold`}>
            topmate
          </Link>

          {/* CENTER */}
          <div className={` border ${isDark ? "border-white/10" : "border-black/10"}  rounded-full shadow`}>

            <div className="hidden md:flex items-center gap-2 relative pl-3 pr-3 pt-2 pb-2">

              {/* PRODUCTS */}
              <div
                onMouseEnter={() => {
                  setHoverItem("products");
                  openMenu("features");
                }}
                onMouseLeave={closeMenu}
              >
                <button
                  className={`${textMain} px-4 py-1 rounded-full text-sm transition ${hoverItem === "products"
                    ? isDark
                      ? "bg-white/20"
                      : "bg-black/10"
                    : ""
                    }`}
                >
                  Products ▾
                </button>
              </div>

              {/* USE CASES */}
              <div
                onMouseEnter={() => {
                  setHoverItem("usecases");
                  openMenu("usecases");
                }}
                onMouseLeave={closeMenu}
              >
                <button
                  className={`${textMain} px-4 py-1 rounded-full text-sm transition ${hoverItem === "usecases"
                    ? isDark
                      ? "bg-white/20"
                      : "bg-black/10"
                    : ""
                    }`}
                >
                  Use Cases ▾
                </button>
              </div>

              {/* SEARCH */}
              <button
                onMouseEnter={() => setHoverItem("search")}
                className={`${textMain} px-4 py-1 rounded-full text-sm transition ${hoverItem === "search"
                  ? isDark
                    ? "bg-white/20"
                    : "bg-black/10"
                  : ""
                  }`}
              >
                Search
              </button>

              {/* PRICING */}
              <button
                onMouseEnter={() => setHoverItem("pricing")}
                className={`${textMain} px-4 py-1 rounded-full text-sm transition ${hoverItem === "pricing"
                  ? isDark
                    ? "bg-white/20"
                    : "bg-black/10"
                  : ""
                  }`}
              >
                Pricing
              </button>

              {/* MEGA MENU */}
              <AnimatePresence>
                {activeMenu && (
                  <motion.div
                    onMouseEnter={() => clearTimeout(closeTimer.current)}
                    onMouseLeave={closeMenu}
                    className="absolute left-1/2 top-12 -translate-x-1/2 w-[900px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className={`${dropdownBg} border rounded-2xl p-6 shadow-2xl`}>

                      <div className="grid grid-cols-3 gap-8">

                        <div>
                          <h4 className="text-gray-400 text-xs mb-4 uppercase">
                            {activeMenu === "features" ? "Features" : "Use Cases"}
                          </h4>

                          <div className="space-y-1">
                            {menuData.map((item, index) => (
                              <Link
                                key={index}
                                to={item.linkPos}
                                className={`flex items-center gap-3 p-3 rounded-lg ${isDark ? "hover:bg-white/10" : "hover:bg-black/10"} transition`}
                              >
                                <div className={`w-8 h-8 ${isDark ? "bg-white/10" : "bg-black/10"} rounded-md`} />

                                <div>
                                  <h4 className={`${textMain} text-sm`}>
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

                        {activeMenu === "features" && (
                          <div className={`col-span-2 ${cardBg} rounded-xl p-4`}>
                            <div className="h-32 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg mb-4" />

                            <h4 className={`${textMain} text-sm mb-2`}>
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
                          <div className={`col-span-2 ${cardBg} rounded-xl p-4`}>
                            <div className="h-32 bg-linear-to-r from-orange-500 to-pink-500 rounded-lg mb-4" />

                            <h4 className={`${textMain} text-sm mb-2`}>
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* DASHBOARD */}
          <button className={`${buttonPrimary} px-5 py-2 rounded-lg`}>
            Dashboard
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;