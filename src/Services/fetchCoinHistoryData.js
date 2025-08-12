import axiosInstance from "../helper/axiosInstance";

const fetchCoinHistoryData = async (id, interval, days = 7, currency = 'usd') => {
  try {
    const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching coin details:", error);
    throw error;
  }
};

export default fetchCoinHistoryData;
