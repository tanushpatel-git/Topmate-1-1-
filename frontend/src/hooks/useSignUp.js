import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import signUpReq from "../services/userAuthServices/signUpReq";

const useSignUp = () => {
    return useMutation({
        mutationFn: (data) => signUpReq(data),
        onSuccess: (data) => {
            toast.success(data?.message || "Sign Up Sucessfull");
        },
        onError: (error) => {
            toast.error(error?.message || "Sign Up Failed");
        }
    });
}

export default useSignUp;