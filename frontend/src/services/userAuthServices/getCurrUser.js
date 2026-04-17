import axiosInstance from "../../utility/axios"

export const getCurrUser = async () => {
    try {
        const res = await axiosInstance.get("/user/getCurrUser")
        return res.data
    } catch (error) {
        console.log(error)
    }
}

