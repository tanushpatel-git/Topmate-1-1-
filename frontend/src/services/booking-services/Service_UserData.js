import axiosInstance from "../../utility/axios";

const Service_UserData = async (category) => {
  const res = await axiosInstance.get(
    `/user/marketplace${category ? `?category=${category}` : ""}`
  );

  return res.data;
};

export default Service_UserData;
