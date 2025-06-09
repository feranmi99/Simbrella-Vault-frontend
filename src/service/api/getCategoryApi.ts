import Axios from '../axios/axiosInstance';


export const getCategoryApi = async () => {
    const { data } = await Axios.get(`/categories`);
    return data;
};

export const getSubCategoryApi = async (categoryId: string) => {
    const { data } = await Axios.get(`/categories/${categoryId}/subcategories`);
    return data;
};
