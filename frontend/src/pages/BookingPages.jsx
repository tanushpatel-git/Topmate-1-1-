import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Skeleton } from 'boneyard-js/react'

const OnetoOne = lazy(() => import("../components/Booking/OnetoOne"));
const Products = lazy(() => import("../components/Booking/Products"));

const BookingPages = () => {
  return (
    <Routes>
      <Route index element={<h1>Booking Home</h1>} />
      <Route path="one-to-one/:id" element={
        <Suspense fallback={<Skeleton name="booking-one-to-one" loading />}>
          <Skeleton name="booking-one-to-one" loading={false}><OnetoOne /></Skeleton>
        </Suspense>
      } />
      <Route path="products/:id" element={
        <Suspense fallback={<Skeleton name="booking-products" loading />}>
          <Skeleton name="booking-products" loading={false}><Products /></Skeleton>
        </Suspense>
      } />
    </Routes>
  );
};

export default BookingPages;