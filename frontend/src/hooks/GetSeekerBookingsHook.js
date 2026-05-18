import { useState } from "react";
import GetSeekerBookingsService from "../services/booking-services/GetSeekerBookingsService";

const GetSeekerBookingsHook = () => {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSeekerBookings = async (SeekerId) => {

    try {
      setLoading(true);
      setError(null);

      const data = await GetSeekerBookingsService(
        SeekerId
      );

      if (data.success) {
        setBookings(data.bookings);
      }

      return data;

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Failed to fetch bookings"
      );

      throw err;

    } finally {
      setLoading(false);
    }
  };

  return {
    bookings,
    loading,
    error,
    getSeekerBookings
  };
};

export default GetSeekerBookingsHook;