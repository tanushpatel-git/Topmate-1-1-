import axiosInstance from "../../utility/axios";

 const getAllUsers = async () => {
  const res = await axiosInstance.get("/user/get-all-users");
  return res.data;
};


export default getAllUsers;
