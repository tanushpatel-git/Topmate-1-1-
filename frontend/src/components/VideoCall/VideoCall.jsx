import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../utility/axios";

function VideoCallPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Redirecting to Zoom...");

  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        const res = await axiosInstance.get(`/booking/${id}`);
        const { booking } = res.data;

        if (booking?.meetingLink) {
          window.location.href = booking.meetingLink;
        } else {
          setMessage("No meeting link found for this booking.");
        }
      } catch (err) {
        console.log("Error fetching booking:", err);
        setMessage("Failed to load meeting. Redirecting to home...");
        setTimeout(() => navigate("/"), 3000);
      }
    };

    fetchAndRedirect();
  }, [id, navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-[#0f172a] text-white text-xl">
      {message}
    </div>
  );
}

export default VideoCallPage;
