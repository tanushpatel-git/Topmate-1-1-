import { useEffect, useState } from "react";
import SeekersBooking from "../services/SeekersBooking";

const SeekerBookingHook = (seekerId) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!seekerId) return;

    const fetchBookings = async () => {
      try {
        const data = await SeekersBooking(seekerId);
        setBookings(data.bookings);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBookings();
  }, [seekerId]);

  return { bookings };
};

export default SeekerBookingHook;