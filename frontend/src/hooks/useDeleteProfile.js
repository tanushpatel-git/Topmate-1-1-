import { useQuery } from "@tanstack/react-query";
import userDeleteProfile from "../services/userAuthServices/userDeleteProfile";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useDeleteProfile = () => {
    const navigate = useNavigate();
    
    return useQuery({
        queryKey: ["delete-profile"],
        queryFn: () => userDeleteProfile(),
        enabled:false,
        onSuccess: (data) => {
            if (data.status) {
                toast.success(data.message);
                navigate("/");
            }else{
                toast.error(data.message);
            }
        },
        onError: (error) => {
            alert(error.message);
        }
    })
}

export default useDeleteProfile