import axios from "axios";

const deleteService = async (id) => {
  try {
    const res = await axios.delete(
      `http://localhost:8001/api/service/${id}`, // ✅ FIXED
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.error("Delete API Error:", error.response?.data || error.message);
    throw error;
  }
};

export default deleteService;