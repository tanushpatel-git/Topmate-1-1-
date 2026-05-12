import axiosInstance from "../../utility/axios"

export const updateProfileDesign = async (data) => {
    try {
        const response = await axiosInstance.post("/user/profile-design", data)
        return response.data;
    } catch (error) {
        throw error
    }
}

export const getProfileDesign = async () => {
    try {
        const response = await axiosInstance.get("/user/profile-design")
        return response.data;
    } catch (error) {
        throw error
    }
}

export const getServiceOfUser = async (id) => {
    try {
        const response = await axiosInstance.get(`/user/service/id/${id}`)
        return response.data;
    } catch (error) {
        throw error
    }
}