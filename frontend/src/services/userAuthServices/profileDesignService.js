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

export const uploadProfileImage = async (file) => {
    try {
        const formData = new FormData();
        formData.append("profileImage", file);
        const response = await axiosInstance.post("/user/profile-design/image", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteProfileHighlight = async (field) => {
    try {
        const response = await axiosInstance.delete("/user/profile-design/highlight", { data: { field } });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getPublicProfile = async (userId) => {
    try {
        const response = await axiosInstance.get(`/user/public-profile/${userId}`)
        return response.data;
    } catch (error) {
        throw error
    }
}