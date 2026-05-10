import React from "react";
import { Route, Routes } from "react-router-dom";
import OnetoOne from "../components/Booking/OnetoOne";
import Products from "../components/Booking/Products";

const BookingPages = () => {
  return (
    <Routes>
      
      <Route index element={<h1>Booking Home</h1>} />
      <Route path="one-to-one/:id" element={<OnetoOne/>} />
      <Route path="products/:id" element={<Products/>}/>

    </Routes>
  );
};

export default BookingPages;