import axiosInstance from "../../utility/axios";

 const CalenderSetting = async (data) => {
  try {
    const res = await axiosInstance.patch("/update-settings", data);

    return res.data;
  } catch (error) {
    const message =
      error.response?.data?.message || "Failed to update settings";

    throw new Error(message);
  }
};

export default CalenderSetting;   