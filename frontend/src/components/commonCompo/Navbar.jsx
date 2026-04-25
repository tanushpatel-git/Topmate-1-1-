import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import useGetCurrUser from "../../hooks/useGetCurrUser";
import { useDispatch } from "react-redux";
import { setUserName, setUserImage, setFirstName, setLastName, setEmail, setCountry, setCurrency, setExpertise, setLinkedInUrl, setTwitterUrl, setInstagramUrl, setWhatsAppNumber, setAvailability, setService, setGraduationYear } from "../../redux/userData/userDetails";

const Navbar = ({ theam = "white" }) => {

  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimer = useRef(null);

  //  ACTIVE STATES
  const [activeSection, setActiveSection] = useState("products");
  const [hoverItem, setHoverItem] = useState(null);
  const [activeChild, setActiveChild] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [userAccess, setUserAccess] = useState(false);

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

  const { data } = useGetCurrUser();

  useEffect(() => {
    if (data?.user?.userName) {
      setUserAccess(true);
    } else {
      setUserAccess(false);
    }
  }, [data])
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (data?.user) {
        const { user } = data;
        dispatch(setUserName(user.userName));
        dispatch(setUserImage(user.userImageUrl));
        dispatch(setFirstName(user.firstName));
        dispatch(setLastName(user.lastName));
        dispatch(setEmail(user.email));
        dispatch(setCountry(user.country));
        dispatch(setCurrency(user.currency));
        dispatch(setExpertise(user.expertise));
        dispatch(setLinkedInUrl(user.linkedInUrl));
        dispatch(setTwitterUrl(user.twitterUrl));
        dispatch(setInstagramUrl(user.instagramUrl));
        dispatch(setWhatsAppNumber(user.whatsAppNumber));
        dispatch(setAvailability(user.availability));
        dispatch(setService(user.service)); 
        dispatch(setGraduationYear(user.graduationYear));
  
      }
    }, [data])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBg} border-b`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className={`${textMain} text-xl font-semibold`}>
            <div className="w-40">
              <img src={`${isDark ? "https://topmate.io/cdn-cgi/image/width=384,quality=90/images/common/topmate-dark.svg" : "https://topmate.io/cdn-cgi/image/width=384,quality=90/images/common/topmate-light.svg"}`} alt="loading..." />
            </div>
          </Link>

          {/* CENTER */}
          <div className={` border ${isDark ? "border-white/10" : "border-black/10"}  rounded-full shadow`}>

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
                <button className={`relative z-10 ${textMain} px-4 py-1 rounded-full text-sm transition`}>
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
                <button className={`relative z-10 ${textMain} px-4 py-1 rounded-full text-sm transition`}>
                  Use Cases ▾
                </button>
              </div>

              {/* SEARCH */}
              <Link to="/search"
                className="relative block"
                onMouseEnter={() => handleMouseEnter("search", null)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setActiveSection("search")}
              >
                {displayItem === "search" && (
                  <motion.div
                    layoutId="nav-bg"
                    className={`absolute inset-0 rounded-full ${isDark ? "bg-white/20" : "bg-black/10"}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className={`relative z-10 ${textMain} px-4 py-1 rounded-full text-sm transition`}>
                  Search
                </div>
              </Link>

              {/* PRICING */}
              <Link to="/pricing"
                className="relative block"
                onMouseEnter={() => handleMouseEnter("pricing", null)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setActiveSection("pricing")}
              >
                {displayItem === "pricing" && (
                  <motion.div
                    layoutId="nav-bg"
                    className={`absolute inset-0 rounded-full ${isDark ? "bg-white/20" : "bg-black/10"}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className={`relative z-10 ${textMain} px-4 py-1 rounded-full text-sm transition`}>
                  Pricing
                </div>
              </Link>

              {/* MEGA MENU */}
              <AnimatePresence>
                {activeMenu && (
                  <motion.div
                    onMouseEnter={keepMenuOpen}
                    onMouseLeave={handleMouseLeave}
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
                                // ✅ FIX HERE
                                onMouseDown={() => {
                                  setActiveSection(activeMenu === "features" ? "products" : "usecases");
                                  setActiveChild(item.name);
                                  setActiveMenu(null);
                                  setHoverItem(null);
                                }}
                                className={`flex items-center gap-3 p-3 rounded-lg ${isDark ? "hover:bg-white/10" : "hover:bg-black/10"
                                  } transition`}
                              >
                                <div className={`w-8 h-8 ${isDark ? "bg-white/10" : "bg-black/10"} rounded-md`} />

                                <div>
                                  <h4 className={`text-sm ${activeChild === item.name
                                    ? "text-blue-500"
                                    : textMain
                                    }`}>
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
          <div className="flex items-center gap-4">

            {userAccess ? (
              <Link to="/creator-dashboard" className={`${buttonPrimary} px-5 py-2 rounded-lg hidden md:block`}>
                Dashboard
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/signIn" className={`border border-black px-5 py-2 rounded-lg hidden md:block`}>
                  Sign In
                </Link>
                <Link to="/signup" className={`${buttonPrimary} px-5 py-2 rounded-lg hidden md:block`}>
                  Start Selling
                </Link>
              </div>
            )}

            {/* HAMBURGER */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden ${textMain}`}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden ${dropdownBg} border-t`}
          >

            <div className="px-6 py-6 space-y-4">

              {/* PRODUCTS */}
              <button
                onClick={() =>
                  setMobileSection(
                    mobileSection === "products" ? null : "products"
                  )
                }
                className="flex justify-between items-center w-full text-left"
              >
                <span className={textMain}>Products</span>
                <ChevronDown
                  size={18}
                  className={`transition ${mobileSection === "products" ? "rotate-180" : ""
                    }`}
                />
              </button>

              {mobileSection === "products" && (
                <div className="pl-4 space-y-2">
                  {features.map((item, i) => (
                    <Link
                      key={i}
                      to={item.linkPos}
                      className={`flex items-center justify-between text-gray-400 ${isDark ? "hover:text-white" : "hover:text-black"}`}
                    >
                      {item.name}
                      <ChevronRight size={16} />
                    </Link>
                  ))}
                </div>
              )}

              {/* USE CASES */}
              <button
                onClick={() =>
                  setMobileSection(
                    mobileSection === "usecases" ? null : "usecases"
                  )
                }
                className="flex justify-between items-center w-full text-left"
              >
                <span className={textMain}>Use Cases</span>
                <ChevronDown
                  size={18}
                  className={`transition ${mobileSection === "usecases" ? "rotate-180" : ""
                    }`}
                />
              </button>

              {mobileSection === "usecases" && (
                <div className="pl-4 space-y-2">
                  {useCases.map((item, i) => (
                    <Link
                      key={i}
                      to={item.linkPos}
                      className={`flex items-center justify-between text-gray-400 ${isDark ? "hover:text-white" : "hover:text-black"}`}
                    >
                      {item.name}
                      <ChevronRight size={16} />
                    </Link>
                  ))}
                </div>
              )}

              {/* SEARCH */}
              <Link
                to="/search"
                className={`flex items-center gap-2 text-gray-400 ${isDark ? "hover:text-white" : "hover:text-black"}`}
              >
                <Search size={18} />
                Search
              </Link>

              {/* PRICING */}
              <Link
                to="/pricing"
                className={`text-gray-400 ${isDark ? "hover:text-white" : "hover:text-black"} block`}
              >
                Pricing
              </Link>

              {userAccess ? (
                <button className={`${buttonPrimary} w-full py-2 rounded-lg mt-4`}>
                  Dashboard
                </button>
              ) : (
                <div className="flex items-center gap-4">
                  <Link to="/signIn" className={`border border-black w-full py-2 rounded-lg mt-4`}>
                    Sign In
                  </Link>
                  <Link to="/signup" className={`${buttonPrimary} w-full py-2 rounded-lg mt-4`}>
                    Start Selling
                  </Link>
                </div>
              )}

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;