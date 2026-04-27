// services/service/createService.js

import axiosInstance from "../../utility/axios";

const AddService = async (data) => {
    try {
        const res = await axiosInstance.post("/service/create", data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export default AddService;
