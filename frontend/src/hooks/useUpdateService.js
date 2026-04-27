import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import updateService from "../services/CreatorService/updateService";

const useUpdateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateService,

    onSuccess: (data) => {
      if (data.status) {
        toast.success("Service updated ✅");

        // refresh this service + list
        queryClient.invalidateQueries(["service"]);
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

export default useUpdateService;