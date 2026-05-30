import { useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";
import updateService from "../services/CreatorService/updateService";

const useUpdateService = () => {
return useMutation({
        mutationFn: (data) => updateService(data),
        onSuccess: (data) => {
            if (data?.status){
                toast.success(data?.message)
            }else{
                toast.error(data?.message)
            }
        },
        onError: (error) => {
            toast.error(error?.message)
        }
    })

};

export default useUpdateService;