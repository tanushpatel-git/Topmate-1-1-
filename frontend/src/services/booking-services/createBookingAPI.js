import axiosInstance from "../axiosInstance";

export const createBookingAPI = async (data) => {
try {
        const res = await axiosInstance.post("/booking/create", data);
        return res.data;
    } catch (error) {
        throw error;
    }

};
