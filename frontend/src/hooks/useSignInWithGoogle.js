import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import signInWithGoogleReq from "../services/userAuthServices/signInWithGoogleReq"

const useSignInWithGoogle = () => {
    return useMutation({
        mutationFn: (email) => signInWithGoogleReq(email),
        onSuccess: (data) => {
            if (data?.status){
                toast.success(data?.message);
            }else{
                toast.error(data?.message);
            }
        },
        onError: (error) => {
            toast.error(error?.message)
        }
    })
}

export default useSignInWithGoogle