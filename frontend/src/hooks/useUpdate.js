import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import updateProfile from "../services/userAuthServices/updateProfile"

const useUpdate = () => {
    return useMutation({
        mutationFn: (data) => updateProfile(data),
        onSuccess: (data) => {
            toast.success(data?.message)
        },
        onError: (error) => {
            toast.error(error?.message)
        }
    })
}

export default useUpdate