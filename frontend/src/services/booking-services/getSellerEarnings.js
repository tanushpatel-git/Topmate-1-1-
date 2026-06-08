import axiosInstance from "../../utility/axios";
export const getSellerEarnings = async () => {
  try {
    const response = await axiosInstance.get("/booking/seller/earnings");
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      success: false,message:error?.response?.data?.message ||"Failed to fetch earnings",
    };
  }
};