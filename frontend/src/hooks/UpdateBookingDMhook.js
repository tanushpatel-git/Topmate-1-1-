// hooks/useUpdateBooking.js

import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import UpdateBookingDM from "../services/booking-services/UpdateBookinDm";

const UpdateBookingDMhook = () => {
  return useMutation({
    mutationFn: (data) => UpdateBookingDM(data),

    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }
    },

    onError: (error) => {
      toast.error(error?.message);
    },
  });
};

export default UpdateBookingDMhook;
