import axios from "axios";
import { CoinGecko_API_URL } from "./constant";

const axiosInstance = axios.create({
  baseURL: CoinGecko_API_URL,
});

export default axiosInstance;