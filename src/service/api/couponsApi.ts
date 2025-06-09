import Axios from '../axios/axiosInstance';
import { CouponPayload } from '@/types/coupons-type';


export const validateCouponApi = async (payload: CouponPayload) => {
    const { data } = await Axios.post(`/coupons/get-coupon-code`, payload);
    return data;
};
