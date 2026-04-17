import axiosInstance from "../../utility/axios"

const emailCheckReq = async (email) => {
    try {
        const { data } = await axiosInstance.post("/user/email-check", { email })
        return data;
    } catch (error) {
        throw error;
    }
}

export default emailCheckReq