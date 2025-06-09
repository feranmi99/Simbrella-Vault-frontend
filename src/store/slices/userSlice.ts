import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/types/user-types';
import { HYDRATE } from "next-redux-wrapper";

interface AuthState {
    user: IUser | null;
    token: string | null;
}

const userSlice = createSlice({
    name: 'user',
    initialState: { token: null, user: null } as AuthState,
    reducers: {
        setCredentials(state, action: PayloadAction<AuthState>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: any) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        });
    }
});

export const { setCredentials } = userSlice.actions;
export default userSlice.reducer;
