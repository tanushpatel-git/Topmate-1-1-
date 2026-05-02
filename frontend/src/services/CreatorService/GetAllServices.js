import axiosInstance from "../../utility/axios";

const getAllServices = async () => {
  const res = await axiosInstance.get("/service/get-all-services");
  return res.data;
};


export default getAllServices;
