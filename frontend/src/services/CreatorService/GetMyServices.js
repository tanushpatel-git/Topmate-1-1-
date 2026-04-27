// services/CreatorService/getMyServices.js

import axiosInstance from "../../utility/axios";

const GetMyServices = async () => {
  const res = await axiosInstance.get("/service/my");
  return res.data;
};

export default GetMyServices;
