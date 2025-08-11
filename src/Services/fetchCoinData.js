import axiosInstance from "../helper/axiosInstance";

const fetchCoinData = async (page = 1, currency = "usd") => {
  const perPage = 10; // Number of coins to fetch per page

  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`
    );
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export default fetchCoinData;
