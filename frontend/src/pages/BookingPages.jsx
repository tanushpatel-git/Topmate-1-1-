import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SkeletonBookingProduct } from "../components/ui/Skeleton";

const OnetoOne = lazy(() => import("../components/Booking/OnetoOne"));
const Products = lazy(() => import("../components/Booking/Products"));

const BookingPages = () => {
  return (
    <Routes>
      <Route index element={<h1>Booking Home</h1>} />
      <Route path="one-to-one/:id" element={<Suspense fallback={<div>Loading...</div>}><OnetoOne /></Suspense>} />
      <Route path="products/:id" element={<Suspense fallback={<div>Loading...</div>}><Products /></Suspense>} />
    
    </Routes>
  );
};

export default BookingPages;