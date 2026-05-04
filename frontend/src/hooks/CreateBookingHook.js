import { useState } from "react";
import { createBookingAPI } from "../services/booking.service";

const useCreateBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBooking = async (payload) => {
    try {
      setLoading(true);
      setError(null);

      const data = await createBookingAPI(payload);

      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createBooking, loading, error };
};

export default useCreateBooking;