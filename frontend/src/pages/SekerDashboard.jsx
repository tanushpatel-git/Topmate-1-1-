
import { Routes, Route, Navigate } from "react-router-dom";
import SeekerSidebar from "../components/SeekerDashboarPage/SeekerSidebar";
import BottomNavbar from "../components/SeekerDashboarPage/BottomNavbar";
import SeekerHome from "../components/SeekerDashboarPage/SeekerHome";
import SeekerBooking from "../components/SeekerDashboarPage/SeekerBooking";
import SeekerProfile from "../components/SeekerDashboarPage/SeekerProfile";
import SeekerReward from "../components/SeekerDashboarPage/SeekerReward";

const SekerDashboard = () => {
  return (
    <div className="min-h-screen w-full">

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SeekerSidebar />
      </div>

      {/* Main Content */}
      <div className="md:ml-64 pb-20 md:pb-0">
        <Routes>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<SeekerHome />} />
          <Route path="booking" element={<SeekerBooking />} />
          <Route path="Profile" element={<SeekerProfile />} />
          <Route path="reward" element={<SeekerReward />} />
        </Routes>
      </div>

      {/* Mobile Bottom Navbar */}
      <BottomNavbar />

    </div>
  );
};

export default SekerDashboard;
