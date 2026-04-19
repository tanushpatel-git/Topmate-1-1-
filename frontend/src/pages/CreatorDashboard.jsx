import React from "react";
import { Route , Routes , Navigate  } from "react-router";
import { useNavigate } from "react-router";     
import CreatorSidebar from "../components/CreatorDashboard/CreatorSidebar";
import CreatorHome from "../components/CreatorDashboard/CreatorHome";
import CreatorBooking from "../components/CreatorDashboard/CreatorBooking";
import PriorityDmAnswer from "../components/CreatorDashboard/PriorityDmAnswer";
import PriorityDmPending from "../components/CreatorDashboard/PriorityDmPending";
const CreatorDashboard = ()=>{
  return (
    <div className="min-h-screen w-full">

{/* Desktop Sidebar */}
<div className="hidden md:block">
  
<CreatorSidebar/>

      </div>

      {/* Main Content */}
      <div className="md:ml-64 pb-20 md:pb-0">
        
        <Routes>
          <Route index element={<Navigate to="home" />} /> 
          <Route path="home" element={<CreatorHome/>} />
          <Route path="booking" element={<CreatorBooking />} />
          <Route path="queries/answer" element={<PriorityDmAnswer/>} />
          <Route path="queries/pending" element={<PriorityDmPending/>} />
        </Routes>
      </div>

      {/* Mobile Bottom Navbar */}
      {/* <BottomNavbar /> */}

    </div>
  );


}
 export default CreatorDashboard;

