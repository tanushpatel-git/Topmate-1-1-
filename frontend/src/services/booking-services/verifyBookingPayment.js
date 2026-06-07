import axiosInstance from "../../utility/axios";

export const verifyBookingPayment = async (data) => {
  try {

    const res = await axiosInstance.post(
      "/booking/verifyRazorpay",
      data
    );

    return res.data;

  } catch (error) {

    throw error;

  }
};