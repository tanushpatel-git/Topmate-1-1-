import axiosInstance from "../../utility/axios";

export const createBookingOrder = async (data) => {
  try {

    const res = await axiosInstance.post(
      "/booking/razorpay",
      data
    );

    return res.data;

  } catch (error) {

    throw error;

  }
};  

