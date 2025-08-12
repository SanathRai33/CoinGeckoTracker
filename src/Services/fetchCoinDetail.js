import axiosInstance from "../helper/axiosInstance";

const fetchCoinDetail = async () => {

  try {
    const response = await axiosInstance.get(
      `/coins/${id}`
    );
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export default fetchCoinDetail;
