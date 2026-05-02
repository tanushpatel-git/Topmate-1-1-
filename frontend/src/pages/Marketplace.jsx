import React, { useEffect } from "react";
import Navbar from "../components/commonCompo/Navbar";
import CategoryNavbar from "../components/MarketPlaceComponent/CategoryNavbar";
import DetailsCardArea from "../components/MarketPlaceComponent/DetailsCardArea";
import SearchBar from "../components/MarketPlaceComponent/SearchBar";
import service_userDataHook from "../hooks/Service_userDataHook";

const Marketplace = () => {



  const { data, isLoading, isError } = service_userDataHook("priorityDm");


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data</p>;

  const detailsOfDeveloper = data?.services?.map((item) => ({
    id: item._id,
    name: item.userDetails.firstName + " " + item.userDetails.lastName,
    role: item.userDetails.expertise?.[0],
    price: item.price,
    duration: item.duration + " mins",
    title: item.title,
    image: item.userDetails.userImageUrl,
  })) || [];

  return (
    <>
      <Navbar />
      <CategoryNavbar />
      <DetailsCardArea detailsOfDeveloper={detailsOfDeveloper} />
      <SearchBar />
    </>
  );
};

export default Marketplace; 