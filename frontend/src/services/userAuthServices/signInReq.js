import axiosInstance from "../../utility/axios";

const signInReq = async (userData) => {
    try {
        const res = await axiosInstance.post("/user/signin", userData);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export default signInReq;