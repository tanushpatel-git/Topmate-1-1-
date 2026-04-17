import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import signInReq from "../services/userAuthServices/signInReq";

const useSignIn = () => {
    return useMutation({
        mutationFn: (userData) => signInReq(userData),
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
    

}

export default useSignIn;