import axios from 'axios';
import Axios from '../axios/axiosInstance';
import { baseURL } from '../axios/axiosInstance';
import {
    VerifyEmailFormPayload,
    ResendTokenPayload,
    ChangePasswordFormPayload,
} from '@/types/user-types';

export const verifyEmailApi = async (payload: VerifyEmailFormPayload) => {
    const data  = await axios.post(`${baseURL}/otp/verify`, payload);
    return data;
};

export const resendTokenApi = async (payload: ResendTokenPayload) => {
    const { data } = await axios.post(`${baseURL}/otp/sendOtp`, payload);
    return data;
};

export const changePasswordApi = async (payload: ChangePasswordFormPayload) => {
    const { data } = await Axios.patch(`/users/password`, payload);
    return data;
};

export const updateAccountApi = async (payload: any) => {
    const { data } = await Axios.patch(`/users`, payload);
    return data;
};

export const getUserApi = async () => {
    const { data } = await Axios.get(`/users`);
    return data;
};

export const getSmileIdTokenApi = async () => {
    const { data } = await Axios.get('/kyc/token');
    return data;
};

export const completeUserKycApi = async () => {
    const { data } = await Axios.patch(`/kyc/complete`);
    return data;
};
