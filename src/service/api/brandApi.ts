import Axios from "../axios/axiosInstance";
import { Brand, BrandStatus, Filters } from '@/types/brands-type';


export const createBrandApi = async (data: any) => {
    const response = await Axios.post(`/brands/create`, data);
    return response.data;
};

export const getUserBrandsApi = async (page: number = 1, limit: number = 10) => {
    const { data } = await Axios.get(`/brands/my-brands`, {
        params: { page, limit }
    });
    return data;
};

export const getAllBrandApi = async (filters?: Partial<Filters>, page: number = 1, limit: number = 10) => {
    const params = {
        // ...filters,
        // page,
        // limit,
    };
    const { data } = await Axios.get(`/brands`, { params });
    return data;
};

export const getbrandsByUsernameApi = async (id: string) => {
    const data = await Axios.get(`/brands/username/${id}`);
    return data.data;
};