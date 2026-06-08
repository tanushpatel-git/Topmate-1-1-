import axiosInstance from "../../utility/axios";

const GetCreatorBookingsService = async (creatorId) => {
  try {
    const res = await axiosInstance.get( `/booking/creator/${creatorId}` );

    return res.data;

  } catch (error) {
    throw error;
  }
};

export default GetCreatorBookingsService;