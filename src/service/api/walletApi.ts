import Axios from "../axios/axiosInstance";

export const createWalletApi = async (data: any) => {
    const response = await Axios.post(`/wallets/create`, data);
    return response.data;
};