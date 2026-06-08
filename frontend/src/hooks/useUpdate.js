import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import updateProfile from "../services/userAuthServices/updateProfile"


const useUpdate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data) => updateProfile(data),
        onSuccess: (data) => {
            if (data?.status){
                toast.success(data?.message)
                queryClient.invalidateQueries({ queryKey: ["currUser"] })
            }else{
                toast.error(data?.message)
            }
        },
        onError: (error) => {
            toast.error(error?.message)
        }
    })
}

export default useUpdate