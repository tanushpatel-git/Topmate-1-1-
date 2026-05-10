import axiosInstance from "../../utility/axios";

const SeekersBooking = async (seekerId) => {
  try {
    const res = await axiosInstance.get(`/booking/seeker/${seekerId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default SeekersBooking;