import { useState } from "react";
import GetCreatorBookingsService from "../services/booking-services/GetCreatorBookingsService";

const GetCreatorBookingsHook = () => {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCreatorBookings = async (creatorId) => {

    try {
      setLoading(true);
      setError(null);

      const data = await GetCreatorBookingsService(
        creatorId
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
    getCreatorBookings,
  };
};

export default GetCreatorBookingsHook;