import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const Navbar = ({ theam = "white" }) => {

  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimer = useRef(null);

  // MOBILE MENU
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ACTIVE STATES
  const [activeSection, setActiveSection] = useState("products");
  const [hoverItem, setHoverItem] = useState(null);
  const [activeChild, setActiveChild] = useState("");

  const displayItem = hoverItem || activeSection;

  const handleMouseEnter = (item, menu) => {
    clearTimeout(closeTimer.current);
    setHoverItem(item);
    if (menu) {
      setActiveMenu(menu);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
      setHoverItem(null);
    }, 300);
  };

  const keepMenuOpen = () => {
    clearTimeout(closeTimer.current);
  };

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
    { name: "Priority DM", linkPos: "/features/priority-dm" },
  ];

  const useCases = [
    { name: "Product Management", linkPos: "/use-cases/product-management" },
    { name: "Ai & Ml", linkPos: "/use-cases/ai-ml" },
    { name: "Software Engineering", linkPos: "/use-cases/software-engineer" },
    { name: "Design (Ux & Ui)", linkPos: "/use-cases/design" }
  ];

  const menuData = activeMenu === "features" ? features : useCases;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBg} border-b`}>

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className={`${textMain} text-xl font-semibold`}>
            <div className="w-40">
              <img
                src={
                  isDark
                    ? "https://topmate.io/cdn-cgi/image/width=384,quality=90/images/common/topmate-dark.svg"
                    : "https://topmate.io/cdn-cgi/image/width=384,quality=90/images/common/topmate-light.svg"
                }
                alt="logo"
              />
            </div>
          </Link>

          {/* CENTER MENU (DESKTOP ONLY) */}
          <div className={`border ${isDark ? "border-white/10" : "border-black/10"} rounded-full shadow`}>

            <div className="hidden md:flex items-center gap-2 relative pl-3 pr-3 pt-2 pb-2">

              {/* PRODUCTS */}
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter("products", "features")}
                onMouseLeave={handleMouseLeave}
              >
                {displayItem === "products" && (
                  <motion.div
                    layoutId="nav-bg"
                    className={`absolute inset-0 rounded-full ${isDark ? "bg-white/20" : "bg-black/10"}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <button className={`relative z-10 ${textMain} px-4 py-1 rounded-full text-sm`}>
                  Products ▾
                </button>
              </div>

              {/* USE CASES */}
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter("usecases", "usecases")}
                onMouseLeave={handleMouseLeave}
              >
                {displayItem === "usecases" && (
                  <motion.div
                    layoutId="nav-bg"
                    className={`absolute inset-0 rounded-full ${isDark ? "bg-white/20" : "bg-black/10"}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <button className={`relative z-10 ${textMain} px-4 py-1 rounded-full text-sm`}>
                  Use Cases ▾
                </button>
              </div>

              {/* SEARCH */}
              <Link to="/search"
                className="relative block"
                onMouseEnter={() => handleMouseEnter("search", null)}
                onMouseLeave={handleMouseLeave}
              >
                {displayItem === "search" && (
                  <motion.div
                    layoutId="nav-bg"
                    className={`absolute inset-0 rounded-full ${isDark ? "bg-white/20" : "bg-black/10"}`}
                  />
                )}

                <div className={`relative z-10 ${textMain} px-4 py-1 rounded-full text-sm`}>
                  Search
                </div>
              </Link>

              {/* PRICING */}
              <Link to="/pricing"
                className="relative block"
                onMouseEnter={() => handleMouseEnter("pricing", null)}
                onMouseLeave={handleMouseLeave}
              >
                {displayItem === "pricing" && (
                  <motion.div
                    layoutId="nav-bg"
                    className={`absolute inset-0 rounded-full ${isDark ? "bg-white/20" : "bg-black/10"}`}
                  />
                )}

                <div className={`relative z-10 ${textMain} px-4 py-1 rounded-full text-sm`}>
                  Pricing
                </div>
              </Link>

            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">

            {/* HAMBURGER (MOBILE) */}
            <button
              className={`md:hidden border ${isDark ? "border-white/10" : "border-black/10"} rounded-full flex justify-center items-center text-4xl ${textMain}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>

            {/* DASHBOARD (DESKTOP ONLY) */}
            <button className={`${buttonPrimary} px-5 py-2 rounded-lg hidden md:block`}>
              Dashboard
            </button>

          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`${dropdownBg} md:hidden border-t`}
          >

            <div className="px-6 py-6 space-y-6">

              <div>
                <h3 className="font-semibold mb-2">Products</h3>
                <div className="space-y-2 pl-3">

                  {features.map((item) => (
                    <Link key={item.name} to={item.linkPos} className="block text-gray-400">
                      {item.name}
                    </Link>
                  ))}

                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Use Cases</h3>

                <div className="space-y-2 pl-3">

                  {useCases.map((item) => (
                    <Link key={item.name} to={item.linkPos} className="block text-gray-400">
                      {item.name}
                    </Link>
                  ))}

                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link to="/search">Search</Link>

                <Link to="/pricing">Pricing</Link>
              </div>

              <button className={`${buttonPrimary} w-full py-2 rounded-lg`}>
                Dashboard
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
};

export default Navbar;