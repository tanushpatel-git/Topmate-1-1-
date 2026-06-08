import axiosInstance from "../../utility/axios";

 const getWithdrawalsApi = async (token) => {
  try {
    const { data } = await axiosInstance.get("/seller/withdrawals",
      {headers: {token,},});
    return data;
  } catch (error) {
    throw error;
  }
};


export default getWithdrawalsApi;
