import React from "react";
import { Route, Routes } from "react-router-dom";
import OnetoOne from "../components/Booking/OnetoOne";


const BookingPages = () => {
  return (
    <Routes>
      <Route index element={<h1>Booking Home</h1>} />
      <Route path="one-to-one/:id" element={<OnetoOne/>} />
    </Routes>
  );
};

export default BookingPages;