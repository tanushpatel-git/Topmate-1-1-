import React, { useEffect } from "react";
import Navbar from "../components/commonCompo/Navbar";
import CategoryNavbar from "../components/MarketPlaceComponent/CategoryNavbar";
import DetailsCardArea from "../components/MarketPlaceComponent/DetailsCardArea";
import SearchBar from "../components/MarketPlaceComponent/SearchBar";
import service_userDataHook from "../hooks/Service_userDataHook";

const Marketplace = () => {



  const { data, isLoading, isError } = service_userDataHook();
  console.log(data);


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  return (
    <>
      <Navbar/>
      <CategoryNavbar active="Software Development"/>
      <DetailsCardArea detailsOfDeveloper={data?.data}/>
      <SearchBar />
    </>
  );
};

export default Marketplace; 