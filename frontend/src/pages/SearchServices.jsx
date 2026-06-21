import React, { useState } from "react";
import Navbar from "../components/commonCompo/Navbar";
import { Search, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import DetailsCardArea from "../components/MarketPlaceComponent/DetailsCardArea";

const SearchServices = ({ searchName = "Software" }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    const q = searchInput.trim();
    if (!q) return;
    navigate(`/marketplace?search=${encodeURIComponent(q)}`);
  };

    return (
        <div className="bg-[#E9E6DE] h-screen w-full">
            <Navbar />
            <div className="min-h-1 w-full relative top-17">
                <div className="ml-30">
                    <Link to="/" className="text-black text-sm font-light p-1 hover:bg-[#f4f3f0] cursor-pointer">Home</Link>
                    <span className="text-black text-sm font-light">/</span>
                    <Link to="/marketplace" className="text-black text-sm font-light p-1 hover:bg-[#f4f3f0] cursor-pointer">List</Link>
                    <span className="text-black text-sm font-light">/</span>
                    <span className="text-black text-sm font-light p-1 hover:bg-[#f4f3f0]">{searchName}</span>
                </div>
            </div>
            {/* search bar  */}
            <div className="w-full relative top-20">
                <div className="w-full justify-center flex items-center gap-3 px-4 py-3">

                    {/* Back Button */}
                    <button className="p-2 rounded-full hover:bg-black/5 transition">
                        <ArrowLeft className="text-[#983E01]" size={22} />
                    </button>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-[40%] flex items-center bg-white border border-[#983E01]/20 rounded-full shadow-sm px-4 py-2 sm:py-3 focus-within:ring-2 focus-within:ring-[#983E01]/30 transition">

                        <input
                            type="text"
                            placeholder="Search for people, services..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            className="w-full text-sm sm:text-base outline-none bg-transparent placeholder:text-gray-400"
                        />

                        <button
                          onClick={handleSearch}
                          className="ml-2 p-2 rounded-full bg-[#983E01]/10 hover:bg-[#983E01]/20 transition"
                        >
                            <Search className="text-[#983E01]" size={18} />
                        </button>
                    </div>

                </div>
            </div>
            <DetailsCardArea />
        </div>
    );
};

export default SearchServices;