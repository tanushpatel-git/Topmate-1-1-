import { useState } from "react";
import createBookingDMService from "../services/booking-services/createBookingDM";

const createBookingDMHook = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBookingDM = async (payload) => {

    try {

      setLoading(true);
      setError(null);

      const data =
        await createBookingDMService(payload);

      return data;

    } catch (err) {

      setError(
        err.response?.data?.message ||
          "Booking failed"
      );

      throw err;

    } finally {

      setLoading(false);
    }
  };

  return {
    createBookingDM,
    loading,
    error,
  };
};

export default createBookingDMHook;