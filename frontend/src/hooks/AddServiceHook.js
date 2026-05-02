import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import AddService from "../services/CreatorService/AddService";

const AddServiceHook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: AddService,

    onSuccess: (data) => {
      if (data.status) {
        toast.success(data.message);
        queryClient.invalidateQueries(["services"]);
      } else {
        toast.error(data.message);
      }
    },

    onError: (error) => {
      toast.error(error?.response?.data?.message || error.message);
    }
  });
};
export default AddServiceHook;
