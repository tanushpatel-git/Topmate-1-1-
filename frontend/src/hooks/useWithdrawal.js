import { useState } from "react";

import requestWithdrawalApi  from "../services/Withdrawl-service/requestWithdrawalApi";
import getWithdrawalsApi  from "../services/Withdrawl-service/getWithdrawalsApi";

const useWithdrawal = () => {
  const [loading, setLoading] = useState(false);
  const [withdrawals, setWithdrawals] = useState([]);

  const requestWithdrawal = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const data = await requestWithdrawalApi(token);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getWithdrawals = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const data = await getWithdrawalsApi(token);

      setWithdrawals(data.withdrawals || []);

      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    withdrawals,
    requestWithdrawal,
    getWithdrawals,
  };
};

export default useWithdrawal;