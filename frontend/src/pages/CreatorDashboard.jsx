import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Skeleton } from 'boneyard-js/react'
import CreatorSidebar from "../components/CreatorDashboard/CreatorSidebar";
import CreatorBottomNavbar from "../components/CreatorDashboard/CreatorBottomNavbar";

const CreatorHome = lazy(() => import("../components/CreatorDashboard/CreatorHome"));
const CreatorBooking = lazy(() => import("../components/CreatorDashboard/CreatorBooking"));
const PriorityDmAnswer = lazy(() => import("../components/CreatorDashboard/PriorityDmAnswer"));
const PriorityDmPending = lazy(() => import("../components/CreatorDashboard/PriorityDmPending"));
const CreatorServices = lazy(() => import("../components/CreatorDashboard/CreatorServices"));
const CreatorCalenderSetting = lazy(() => import("../components/CreatorDashboard/CreatorCalender"));
const Profile = lazy(() => import("../components/CreatorDashboard/Profile"));
const CreateService = lazy(() => import("../components/CreatorDashboard/CreateService"));
const ServiceCustomize = lazy(() => import("../components/CreatorDashboard/ServiceCustomize"));

const CreatorDashboard = () => {

  return (
    <div className="min-h-screen w-full">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">

        <CreatorSidebar />

      </div>

      {/* Main Content */}
      <div className="md:ml-64 pb-20 md:pb-0">
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={
            <Suspense fallback={<Skeleton name="creator-home" loading />}>
              <Skeleton name="creator-home" loading={false}><CreatorHome /></Skeleton>
            </Suspense>
          } />
          <Route path="calls/:type/:status" element={
            <Suspense fallback={<Skeleton name="creator-booking" loading />}>
              <Skeleton name="creator-booking" loading={false}><CreatorBooking /></Skeleton>
            </Suspense>
          } />
          <Route path="queries/answer" element={
            <Suspense fallback={<Skeleton name="creator-priority-answer" loading />}>
              <Skeleton name="creator-priority-answer" loading={false}><PriorityDmAnswer /></Skeleton>
            </Suspense>
          } />
          <Route path="queries/pending" element={
            <Suspense fallback={<Skeleton name="creator-priority-pending" loading />}>
              <Skeleton name="creator-priority-pending" loading={false}><PriorityDmPending /></Skeleton>
            </Suspense>
          } />
          <Route path="services/:type" element={
            <Suspense fallback={<Skeleton name="creator-services" loading />}>
              <Skeleton name="creator-services" loading={false}><CreatorServices /></Skeleton>
            </Suspense>
          } />
          <Route path="services/:type/create" element={
            <Suspense fallback={<Skeleton name="creator-create-service" loading />}>
              <Skeleton name="creator-create-service" loading={false}><CreateService /></Skeleton>
            </Suspense>
          } />
          <Route path="services/:type/edit/:serviceId" element={
            <Suspense fallback={<Skeleton name="creator-service-customize" loading />}>
              <Skeleton name="creator-service-customize" loading={false}><ServiceCustomize /></Skeleton>
            </Suspense>
          } />
          <Route path="calendar/setting" element={
            <Suspense fallback={<Skeleton name="creator-calendar" loading />}>
              <Skeleton name="creator-calendar" loading={false}><CreatorCalenderSetting /></Skeleton>
            </Suspense>
          } />
          <Route path="/profile" element={
            <Suspense fallback={<Skeleton name="creator-profile" loading />}>
              <Skeleton name="creator-profile" loading={false}><Profile /></Skeleton>
            </Suspense>
          } />
        </Routes>

      </div>
<CreatorBottomNavbar />


    </div>
  );
};

export default CreatorDashboard;


