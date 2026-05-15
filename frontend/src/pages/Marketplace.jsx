import React, { useState } from "react";
import Navbar from "../components/commonCompo/Navbar";
import CategoryNavbar from "../components/MarketPlaceComponent/CategoryNavbar";
import DetailsCardArea from "../components/MarketPlaceComponent/DetailsCardArea";
import SearchBar from "../components/MarketPlaceComponent/SearchBar";
import service_userDataHook from "../hooks/Service_userDataHook";

const Marketplace = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const params = {};
  if (selectedCategory) params.category = selectedCategory;
  if (searchQuery) params.search = searchQuery;

  const { data, isLoading, isError } = service_userDataHook(params);

  return (
    <>
      <Navbar/>
      <CategoryNavbar onCategoryChange={setSelectedCategory}/>
      <DetailsCardArea detailsOfDeveloper={data?.data} isLoading={isLoading} isError={isError}/>
      <SearchBar onSearch={setSearchQuery} />
    </>
  );
};

export default Marketplace; 