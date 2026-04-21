import axiosInstance from "../../utility/axios"

const updateProfile = async (data) => {
    try {
        const response = await axiosInstance.post("/user/update-profile", data)
        return response.data;
    } catch (error) {
        throw error
    }
}

export default updateProfile