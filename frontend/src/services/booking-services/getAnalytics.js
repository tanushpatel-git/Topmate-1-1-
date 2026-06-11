import axiosInstance from "../../utility/axios";

export const getAnalytics = async (type) => {
  try {
    const response = await axiosInstance.get(`/dashboardAnalytics/${type}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error?.response?.data?.message || "Failed to fetch analytics",
    };
  }
};
