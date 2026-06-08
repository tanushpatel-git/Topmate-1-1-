import { useState } from "react";

import { getSellerEarnings } from "../services/booking-services/getSellerEarnings";

const useSellerEarnings = () => {
  const [earnings, setEarnings] =useState(null);
  const [loading, setLoading] =useState(false);
  const [error, setError] =useState(null);

  const fetchEarnings = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await getSellerEarnings();
      if (!result.success) {
        throw new Error(
          result.message
        );
      }

      setEarnings(result);
      console.log("Earnings data:", result);
      return result;
    } catch (err) {
      setError(err.message);
      console.log(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {earnings,loading,error,fetchEarnings,};
};

export default useSellerEarnings;