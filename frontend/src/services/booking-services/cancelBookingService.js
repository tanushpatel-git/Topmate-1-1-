import axiosInstance from "../../utility/axios";

const cancelBookingService = async (bookingId) => {

  try {

    const res = await axiosInstance.put(
      `/booking/cancel/${bookingId}`
    );

    return res.data;

  } catch (error) {

    throw error?.response?.data || error;

  }

};

export default cancelBookingService;