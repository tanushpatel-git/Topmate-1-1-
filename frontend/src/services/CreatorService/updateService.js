import axiosInstance from "../../utility/axios";

const updateService = async ({ id, formData }) => {
  const res = await axiosInstance.put(
    `/service/update/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};

export default updateService;
