import axiosInstance from "../../utility/axios"

const signInWithGoogleReq = async (email) => {
    try {
        console.log("Email sent to backend:", email)
        const { data } = await axiosInstance.post("/user/signin-with-google", { email })
        console.log("Data received from backend:", data)
        return data
    } catch (error) {
        throw error.data.message
    }
}

export default signInWithGoogleReq