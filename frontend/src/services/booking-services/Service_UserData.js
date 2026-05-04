import axiosInstance from "../../utility/axios";

const Service_UserData = async (category) => {
  try{

    const res = await axiosInstance.get("/user/marketplace");
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: "Failed to fetch services" };
  }

};

export default Service_UserData;
