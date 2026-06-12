import { useState, useCallback } from "react";
import { getAnalytics } from "../services/booking-services/getAnalytics";

const useAnalytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAnalytics = useCallback(async (type = "week") => {
    try {
      setLoading(true);
      setError(null);
      setAnalytics(null);
      const result = await getAnalytics(type);
      if (!result.success && result.message) {
        throw new Error(result.message);
      }
      setAnalytics(result.data);
      return result.data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { analytics, loading, error, fetchAnalytics };
};

export default useAnalytics;
