import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CreatorSidebar from "../components/CreatorDashboard/CreatorSidebar";
import CreatorHome from "../components/CreatorDashboard/CreatorHome";
import CreatorBooking from "../components/CreatorDashboard/CreatorBooking";
import PriorityDmAnswer from "../components/CreatorDashboard/PriorityDmAnswer";
import PriorityDmPending from "../components/CreatorDashboard/PriorityDmPending";
import CreatorServices from "../components/CreatorDashboard/CreatorServices"
import CreateService from "../components/CreatorDashboard/CreateService"
import ServiceCustomize from "../components/CreatorDashboard/ServiceCustomize"
import CreatorCalenderSetting from "../components/CreatorDashboard/CreatorCalender";
import Profile from "../components/CreatorDashboard/Profile";
import CreateService from "../components/CreatorDashboard/CreateService";
import ServiceCustomize from "../components/CreatorDashboard/ServiceCustomize";
import CreatorBottomNavbar from "../components/CreatorDashboard/CreatorBottomNavbar";
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
          {/* Create services */}
          <Route path="services/:type/create" element={<CreateService/>} />
          <Route path="services/:type/edit/:serviceId" element={<ServiceCustomize/>} />
          {/* Calender */}
          <Route path="calendar/setting" element={<CreatorCalenderSetting />} />

          {/* Profile */}
          <Route path="/profile" element={<Profile />}/>

        </Routes>


      </div>
<CreatorBottomNavbar />


    </div>
  );
};

export default CreatorDashboard;


