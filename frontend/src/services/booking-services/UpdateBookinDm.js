// services/bookingService.js

import axiosInstance from "../../utility/axios";

// update booking answer + status
 const UpdateBookinDm = async (data) => {
  try {

    const res = await axiosInstance.put(
      `/booking/update/${data.id}`,
      {
        answer: data.answer,
        status: data.status,
      }
    );

    return res.data;

  } catch (error) {

    throw (
      error?.response?.data || {
        message: "Failed to update booking",
      }
    );

  }

};


export default UpdateBookinDm;
