import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import emailCheckReq from "../services/userAuthServices/emailCheckReq"
import otpVerificationReq from "../services/userAuthServices/otpVerification"


const useEmailCheck = () => {
    return useMutation({
        mutationKey: ["emailCheck"],
        mutationFn: (email) => emailCheckReq(email),
        onSuccess: (data) => {
            if (data?.status){
                toast.success(data?.message);
            }else{
                toast.error(data?.message);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}

const useOtpVerification = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["otpVerification"],
        mutationFn: ({email , otp}) => otpVerificationReq({email , otp}),
        onSuccess: (data) => {
            if (data?.status){
                toast.success(data?.message);
                queryClient.invalidateQueries({ queryKey: ["currUser"] });
            }else{
                toast.error(data?.message);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}
export {useEmailCheck , useOtpVerification}