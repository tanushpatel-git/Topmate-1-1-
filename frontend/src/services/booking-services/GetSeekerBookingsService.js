import axiosInstance from "../../utility/axios";

const GetSeekerBookingsService = async (SeekerId) => {
  try {
    const res = await axiosInstance.get(
      `/booking/Seeker/${SeekerId}`
    );

    return res.data;

  } catch (error) {
    throw error;
  }
};

export default GetSeekerBookingsService;