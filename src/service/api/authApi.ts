import axios from 'axios';
import Axios from '../axios/axiosInstance';
import { baseURL } from '@/service/axios/axiosInstance';
import {
    ForgotPasswordFormPayload,
    LoginFormPayload,
    RegisterFormPayload,
    ResetPasswordFormPayload,
} from '@/types/auth-types';

export const loginApi = async (payload: LoginFormPayload) => {    
    const  data  = await axios.post(`${baseURL}/auth/login`, payload);
    return data;
};

export const registerApi = async (payload: RegisterFormPayload) => {
    const { data } = await axios.post(`${baseURL}/auth/register`, payload);
    return data;
};

export const forgotPasswordApi = async (payload: ForgotPasswordFormPayload) => {
    const { data } = await axios.post(`${baseURL}/auth/password/forgot`, {
        ...payload,
        referrer: 'customer',
    });
    return data;
};

export const resetPasswordApi = async ({ password, token }: ResetPasswordFormPayload) => {
    const { data } = await axios.patch(
        `${baseURL}/auth/password/reset`,
        { password },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return data;
};

export const verifyResetPasswordTokenApi = async (token: string) => {
    const { data } = await axios.get(`${baseURL}/auth/password/reset/verify`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export const logoutApi = async () => {
    const response = await Axios.post('auth/logout');
    return response.data;
};
