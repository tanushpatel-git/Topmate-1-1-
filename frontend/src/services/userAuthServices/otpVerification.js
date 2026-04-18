import axiosInstance from "../../utility/axios";

const otpVerificationReq = async ({ email, otp }) => {
    try {
        const { data } = await axiosInstance.post("/user/otp-verification", { email, otp });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default otpVerificationReq;