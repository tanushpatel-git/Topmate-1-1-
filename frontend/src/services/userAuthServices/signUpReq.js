import axiosInstance from "../../utility/axios";

const signUpReq = async (data) => {
    try {
        const response = await axiosInstance.post("/user/signup", data)
        return response.data;
    } catch (error) {
        console.log("Error come in signUpReq file:", error);
        throw error;
    }

}
export default signUpReq;