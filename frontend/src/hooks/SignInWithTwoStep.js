import { useMutation } from "@tanstack/react-query"
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
    return useMutation({
        mutationKey: ["otpVerification"],
        mutationFn: ({email , otp}) => otpVerificationReq({email , otp}),
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
export {useEmailCheck , useOtpVerification}