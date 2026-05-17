import axiosInstance from "../../utility/axios";

export const getStreamToken = async (userId) => {

  const res = await axiosInstance.post(
    "/stream/token",
    {
      userId: userId,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.data;
};