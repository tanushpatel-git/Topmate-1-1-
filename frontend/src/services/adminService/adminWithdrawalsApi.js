import axiosInstance from "../../utility/axios";

export const getAllWithdrawalsApi = async () => {
  try {
    const { data } = await axiosInstance.get("/admin/withdrawals");
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateWithdrawalStatusApi = async (withdrawalId, body) => {
  try {
    const { data } = await axiosInstance.put(`/admin/withdrawals/${withdrawalId}`, body);
    return data;
  } catch (error) {
    throw error;
  }
};
