import axiosInstance from "../../utility/axios";

const CalenderSetting = async (data) => {
  if (!data || !data.userId) {
    throw new Error("userId is required");
  }

  console.log("Sending Data:", data);

  const res = await axiosInstance.post("/user/update-settings", data);

  console.log("Response:", res.data);

  return res.data;
};

export default CalenderSetting;