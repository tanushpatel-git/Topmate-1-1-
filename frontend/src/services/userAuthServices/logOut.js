import axiosInstance from "../../utility/axios";
import { toast } from "react-hot-toast";
import { clearUserDetails } from "../../redux/userData/userDetails";

const logout = async (navigate,dispatch,queryClient) => {
    try {
        const response = await axiosInstance.get("/user/logout")
        dispatch(clearUserDetails());
        if (response.status) {
            queryClient.removeQueries({ queryKey: ["currUser"] });
            queryClient.setQueryData(["currUser"], null);
            toast.success("Log out Sucessfully");
            navigate("/")
        } else {
            toast.error(response.data.message)
        }
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export default logout