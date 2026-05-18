import { useState } from "react";
import cancelBookingService from "../services/booking-services/cancelBookingService";

function CancelBookingHook() {

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(false);

  const cancelBooking = async (bookingId) => {

    try {

      setLoading(true);

      setError(null);

      setSuccess(false);

      const data = await cancelBookingService(
        bookingId
      );

      setSuccess(true);

      return data;

    } catch (err) {

      setError(
        err?.message ||
        "Failed to cancel booking"
      );

    } finally {

      setLoading(false);

    }

  };

  return {
    cancelBooking,
    loading,
    error,
    success,
  };
}

export default CancelBookingHook;