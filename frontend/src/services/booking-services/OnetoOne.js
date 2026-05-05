
import axiosInstance from "../../utility/axios";

export const OnetoOne = async (id) => {
  
  const res = await axiosInstance.get(`/service/one-to-one/${id}`);
  
  return res.data;
}



