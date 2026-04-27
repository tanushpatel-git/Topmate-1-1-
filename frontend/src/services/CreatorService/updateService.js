import axiosInstance from "../../utility/axios";

const updateService = async ({ id, formData }) => {
  const res = await axiosInstance.put(`/service/update/${id}`, formData);
  return res.data;
};

export default updateService;