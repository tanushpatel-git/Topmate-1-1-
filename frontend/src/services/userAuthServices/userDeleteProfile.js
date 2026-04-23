import axiosInstance from "../../utility/axios";

const userDeleteProfile = async () => {
    try {
        const res = await axiosInstance.get("/user/delete-account");
        return res.data;
    } catch (error) {
        throw error;
    }
}

export default userDeleteProfile