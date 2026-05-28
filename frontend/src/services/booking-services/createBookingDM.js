import axiosInstance from "../../utility/axios";

const createBookingDM = async (data) => {
try {
        const res = await axiosInstance.post("/booking/create/dm", data);
        return res.data;
    } catch (error) {
        throw error;
    }

};


export default createBookingDM;
