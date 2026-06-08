import axiosInstance from "../../utility/axios";

 const requestWithdrawalApi = async (token) => {
  try {
    const { data } = await axiosInstance.post("/seller/withdraw",{},
      {headers: {token,},});
    return data;
  } catch (error) {
    throw error;
  }
};


export default requestWithdrawalApi;
