import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/commonCompo/Navbar";
import CategoryNavbar from "../components/MarketPlaceComponent/CategoryNavbar";
import DetailsCardArea from "../components/MarketPlaceComponent/DetailsCardArea";
import SearchBar from "../components/MarketPlaceComponent/SearchBar";
import service_userDataHook from "../hooks/Service_userDataHook";

const BLOCKED_CATEGORIES = {
  workshop: "cohort",
  package: "package",
};

const Marketplace = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const urlSearch = searchParams.get("search");
    if (urlSearch) setSearchQuery(urlSearch);
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    if (BLOCKED_CATEGORIES[category]) {
      const type = BLOCKED_CATEGORIES[category];
      toast(`${type === "cohort" ? "Cohorts & Workshops" : "Packages"} coming soon!`, { icon: "🚧" });
      navigate("/upcoming", { state: { type } });
      return;
    }
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    navigate(`/marketplace${query ? `?search=${encodeURIComponent(query)}` : ""}`, { replace: true });
  };

  const params = {};
  if (selectedCategory) params.category = selectedCategory;
  if (searchQuery) params.search = searchQuery;

  const { data, isLoading, isError } = service_userDataHook(params);

  return (
    <>
      <Navbar/>
      <CategoryNavbar onCategoryChange={handleCategoryChange}/>
      <DetailsCardArea detailsOfDeveloper={data?.data} isLoading={isLoading} isError={isError}/>
      <SearchBar onSearch={handleSearch} />
    </>
  );
};

export default Marketplace; 