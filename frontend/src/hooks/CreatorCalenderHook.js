import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import CalenderSetting from "../services/CreatorService/CalenderSetting";

const CreatorCalenderHook = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CalenderSetting,

    onSuccess: (data) => {
      if (data.success) {
        toast.success("Settings updated");

        queryClient.invalidateQueries(["user"]);
      } else {
        toast.error(data.message || "Update failed");
      }
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message || error.message || "Something went wrong"
      );
    },
  });
};

export default CreatorCalenderHook;