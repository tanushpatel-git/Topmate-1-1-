import axiosInstance from "../../utility/axios";

const AddService = async (data) => {

  const res = await axiosInstance.post(
    "/service/create",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};

export default AddService;