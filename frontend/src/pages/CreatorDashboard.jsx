import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CreatorSidebar from "../components/CreatorDashboard/CreatorSidebar";
import CreatorHome from "../components/CreatorDashboard/CreatorHome";
import CreatorBooking from "../components/CreatorDashboard/CreatorBooking";
import PriorityDmAnswer from "../components/CreatorDashboard/PriorityDmAnswer";
import PriorityDmPending from "../components/CreatorDashboard/PriorityDmPending";

import { useSelector } from "react-redux";

const CreatorDashboard = () => {

  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    console.log(userData);

  }, [userData])

  return (
    <div className="min-h-screen w-full">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">

        <CreatorSidebar />

      </div>

      {/* Main Content */}
      <div className="md:ml-64 pb-20 md:pb-0">
        <Routes>

          {/* Default route */}
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<CreatorHome />} />

          {/* Bookings */}
          <Route
            path="calls/:type/:status"
            element={<CreatorBooking />}
          />

          {/* Priority DM */}
          <Route path="queries/answer" element={<PriorityDmAnswer />} />
          <Route path="queries/pending" element={<PriorityDmPending />} />

          {/* services*/}
          <Route
            path="services/:type"
            element={<CreatorServices />}
          />

          {/* Calender */}
          <Route path="calendar/setting" element={<CreatorCalenderSetting />} />
        </Routes>




      </div>
    </div>
  );
};

export default CreatorDashboard;
