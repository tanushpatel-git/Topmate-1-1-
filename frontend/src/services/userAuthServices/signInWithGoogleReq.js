import axiosInstance from "../../utility/axios"

const signInWithGoogleReq = async (email) => {
    try {
        const { data } = await axiosInstance.post("/user/signin-with-google", { email })
        return data
    } catch (error) {
        throw error
    }
}

export default signInWithGoogleReq