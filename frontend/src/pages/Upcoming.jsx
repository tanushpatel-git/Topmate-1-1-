import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/commonCompo/Navbar";
import UpcomingFeature from "../components/ui/UpcomingFeature";

const Upcoming = () => {
  const location = useLocation();
  const type = location.state?.type || "webinar";

  return (
    <>
      <Navbar />
      <UpcomingFeature type={type} />
    </>
  );
};

export default Upcoming;
