import Axios from '../axios/axiosInstance';


export const getStateApi = async () => {
    const { data } = await Axios.get(`/location`);
    return data;
};

export const getCitiesByStateApi = async (stateId: string) => {
    const { data } = await Axios.get(`/location/${stateId}/cities`);
    return data;
};
