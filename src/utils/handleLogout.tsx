import { logoutApi } from "@/service/api/authApi";
import { AppDispatch } from "@/store";
import { setCredentials } from "@/store/slices/userSlice";

export const handleLogout = async (router: any, dispatch: AppDispatch) => {
  try {
    await logoutApi();
    localStorage.removeItem('savetown_v_email');
    dispatch(setCredentials({ token: null, user: null }));
    window.location.href = '/';
  } catch (error) {
    console.error("Logout failed", error);
  }
};
