import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CreatorSidebar from "../components/CreatorDashboard/CreatorSidebar";
import CreatorBottomNavbar from "../components/CreatorDashboard/CreatorBottomNavbar";
import { SkeletonPage } from "../components/ui/Skeleton";
import PayoutSeller from "../components/CreatorDashboard/PayoutSeller";

const CreatorHome = lazy(() => import("../components/CreatorDashboard/CreatorHome"));
const CreatorBooking = lazy(() => import("../components/CreatorDashboard/CreatorBooking"));
const PriorityDmAnswer = lazy(() => import("../components/CreatorDashboard/PriorityDmAnswer"));
const PriorityDmPending = lazy(() => import("../components/CreatorDashboard/PriorityDmPending"));
const CreatorServices = lazy(() => import("../components/CreatorDashboard/CreatorServices"));
const CreatorCalenderSetting = lazy(() => import("../components/CreatorDashboard/CreatorCalender"));
const Profile = lazy(() => import("../components/CreatorDashboard/Profile"));
const CreateService = lazy(() => import("../components/CreatorDashboard/CreateService"));
const ServiceCustomize = lazy(() => import("../components/CreatorDashboard/ServiceCustomize"));
const Setting = lazy(() => import("../components/CreatorDashboard/Setting"));
const Analytics = lazy(() => import("../components/CreatorDashboard/Analytics"));

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
          <Route path="home" element={<Suspense fallback={<SkeletonPage />}><CreatorHome /></Suspense>} />
          <Route path="calls/:type/:status" element={<Suspense fallback={<SkeletonPage />}><CreatorBooking /></Suspense>} />
          <Route path="queries/answer" element={<Suspense fallback={<SkeletonPage />}><PriorityDmAnswer /></Suspense>} />
          <Route path="queries/pending" element={<Suspense fallback={<SkeletonPage />}><PriorityDmPending /></Suspense>} />
          <Route path="services/:type" element={<Suspense fallback={<SkeletonPage />}><CreatorServices /></Suspense>} />
          <Route path="services/:type/create" element={<Suspense fallback={<SkeletonPage />}><CreateService /></Suspense>} />
          <Route path="services/:type/edit/:serviceId" element={<Suspense fallback={<SkeletonPage />}><ServiceCustomize /></Suspense>} />
          <Route path="calendar/setting" element={<Suspense fallback={<SkeletonPage />}><CreatorCalenderSetting /></Suspense>} />
          <Route path="/profile" element={<Suspense fallback={<SkeletonPage />}><Profile /></Suspense>} />
          <Route path='/setting' element={<Suspense fallback={<div>Loading...</div>}><Setting /></Suspense>} />
          <Route path='/payout' element={<Suspense fallback={<div>Loading...</div>}><PayoutSeller/></Suspense>} />
          <Route path='/analytics' element={<Suspense fallback={<div>Loading...</div>}><Analytics/></Suspense>} />
        </Routes>

      </div>
<CreatorBottomNavbar />


    </div>
  );
};

export default CreatorDashboard;


