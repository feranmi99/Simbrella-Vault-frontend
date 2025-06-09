import { CreateListingPayload } from '@/types/listing-type';
import Axios from '../axios/axiosInstance';


export const createListingApi = async (payload: CreateListingPayload) => {
    const { data } = await Axios.post(`/listing/create`, payload);
    return data.data;
};

export const getAllListingsApi = async () => {
    const data = await Axios.get(`/listing`);
    return data.data;
};

export const getListingsByCategoryAndSubcategory = async (
    categoryId: string,
    subCategoryId: string
) => {
    const { data } = await Axios.get(
        `/listing/category/${categoryId}/subcategory/${subCategoryId}`
    );
    return data.data;
};

export const getListingsByIdApi = async (id: string) => {
    const data = await Axios.get(`/listing/${id}`);
    return data.data;
};