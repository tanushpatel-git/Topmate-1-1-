import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import signInWithGoogleReq from "../services/userAuthServices/signInWithGoogleReq"

const useSignInWithGoogle = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (email) => signInWithGoogleReq(email),
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
            toast.error(error?.message)
        }
    })
}

export default useSignInWithGoogle