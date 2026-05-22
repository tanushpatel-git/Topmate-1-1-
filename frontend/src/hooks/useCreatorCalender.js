import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import CalenderSetting from "../services/CreatorService/CalenderSetting";

const useCreatorCalender = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => CalenderSetting(data),

    onSuccess: (data) => {
      console.log("✅ Success:", data);

      if (data.success) {
        toast.success("Settings updated");
        queryClient.invalidateQueries({ queryKey: ["currUser"] });
      } else {
        toast.error(data.message || "Update failed");
      }
    },

    onError: (error) => {
      console.error("❌ Error:", error);

      toast.error(
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong"
      );
    },
  });

  return {
    updateSettings: mutation.mutate,
    updateSettingsAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  };
};

export default useCreatorCalender;