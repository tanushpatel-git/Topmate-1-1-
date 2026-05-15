import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
          <Route path="home" element={<Suspense fallback={<div>Loading...</div>}><CreatorHome /></Suspense>} />
          <Route path="calls/:type/:status" element={<Suspense fallback={<div>Loading...</div>}><CreatorBooking /></Suspense>} />
          <Route path="queries/answer" element={<Suspense fallback={<div>Loading...</div>}><PriorityDmAnswer /></Suspense>} />
          <Route path="queries/pending" element={<Suspense fallback={<div>Loading...</div>}><PriorityDmPending /></Suspense>} />
          <Route path="services/:type" element={<Suspense fallback={<div>Loading...</div>}><CreatorServices /></Suspense>} />
          <Route path="services/:type/create" element={<Suspense fallback={<div>Loading...</div>}><CreateService /></Suspense>} />
          <Route path="services/:type/edit/:serviceId" element={<Suspense fallback={<div>Loading...</div>}><ServiceCustomize /></Suspense>} />
          <Route path="calendar/setting" element={<Suspense fallback={<div>Loading...</div>}><CreatorCalenderSetting /></Suspense>} />
          <Route path="/profile" element={<Suspense fallback={<div>Loading...</div>}><Profile /></Suspense>} />
        </Routes>

      </div>
<CreatorBottomNavbar />


    </div>
  );
};

export default CreatorDashboard;


