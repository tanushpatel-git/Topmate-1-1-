import axiosInstance from "../../utility/axios";

const getServiceById = async (id) => {
  console.log(id);
  const res = await axiosInstance.get(`/service/id/${id}`); 
  return res.data;
};

export default getServiceById;