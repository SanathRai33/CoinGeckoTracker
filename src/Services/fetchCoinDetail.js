import axiosInstance from "../helper/axiosInstance";

const fetchCoinDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`/coins/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching coin details:", error);
    throw error;
  }
};

export default fetchCoinDetail;
