import axiosInstance from "../../utility/axios";
import { toast } from "react-hot-toast";
import { clearUserDetails } from "../../redux/userData/userDetails";

const logout = async (navigate, dispatch, queryClient) => {
    try {
        const response = await axiosInstance.get("/user/logout")
        dispatch(clearUserDetails());
        if (response.status) {
            toast.success("Log out Sucessfully");
            navigate("/")
            queryClient.clear()
        } else {
            toast.error(response.data.message || "Logout Failed")
        }
    } catch (error) {
        toast.error(error.response.data.message || "Logout Failed")
    }
}

export default logout