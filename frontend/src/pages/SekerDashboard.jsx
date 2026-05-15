
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import SeekerSidebar from "../components/SeekerDashboarPage/SeekerSidebar";
import BottomNavbar from "../components/SeekerDashboarPage/BottomNavbar";
import { useSelector } from "react-redux";

const SeekerHome = lazy(() => import("../components/SeekerDashboarPage/SeekerHome"));
const SeekerBooking = lazy(() => import("../components/SeekerDashboarPage/SeekerBooking"));
const SeekerProfile = lazy(() => import("../components/SeekerDashboarPage/SeekerProfile"));
const SeekerReward = lazy(() => import("../components/SeekerDashboarPage/SeekerReward"));

const SekerDashboard = () => {
  const userData = useSelector((state) => state.userData);

  console.log(userData)
  return (
    <div className="min-h-screen w-full">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SeekerSidebar userData={userData} />
      </div>

      {/* Main Content */}
      <div className="md:ml-64 pb-20 md:pb-0">
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Suspense fallback={<div>Loading...</div>}><SeekerHome userData={userData} /></Suspense>} />
          <Route path="booking" element={<Suspense fallback={<div>Loading...</div>}><SeekerBooking userData={userData} /></Suspense>} />
          <Route path="Profile" element={<Suspense fallback={<div>Loading...</div>}><SeekerProfile userData={userData} /></Suspense>} />
          <Route path="reward" element={<Suspense fallback={<div>Loading...</div>}><SeekerReward userData={userData} /></Suspense>} />
        </Routes>
      </div>

      {/* Mobile Bottom Navbar */}
      <BottomNavbar />

    </div>
  );
};

export default SekerDashboard;
