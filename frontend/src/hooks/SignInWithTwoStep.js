import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import emailCheckReq from "../services/userAuthServices/emailCheckReq"


const useEmailCheck = () => {
    return useMutation({
        mutationKey: ["emailCheck"],
        mutationFn: (email) => emailCheckReq(email),
        onSuccess: (data) => {
            toast.success(data?.message);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}

export default useEmailCheck