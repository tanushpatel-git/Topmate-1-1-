import axiosInstance from "../../utility/axios";

const Service_UserData = async (params = {}) => {
  try {
    const res = await axiosInstance.get(`/user/marketplace`, { params });
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: "Failed to fetch services" };
  }
};

export default Service_UserData;
