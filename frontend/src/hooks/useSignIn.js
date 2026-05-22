import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import signInReq from "../services/userAuthServices/signInReq";

const useSignIn = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (userData) => signInReq(userData),
        onSuccess: (data) => {
            if (data?.status){
                toast.success(data?.message);
                queryClient.setQueryData(["currUser"], { user: data.user });
                queryClient.invalidateQueries();
            }else{
                toast.error(data?.message);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
    

}

export default useSignIn;