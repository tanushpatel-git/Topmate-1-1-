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

export const getMyServices = async () => {
    try {
        const response = await axiosInstance.get("/service/my")
        return response.data.services;
    } catch (error) {
        throw error
    }
}