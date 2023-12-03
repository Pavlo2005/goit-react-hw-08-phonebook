import { createSlice } from '@reduxjs/toolkit';
import { UserRegister, logIn, logOut, refreshUser } from './operations';
import toast from 'react-hot-toast';



const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [UserRegister.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            toast.success("Log in success");
            state.isLoggedIn = true;
        },
        [UserRegister.rejected](state) {
            toast.error("Log in error");
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            toast.success("Log in success");
            state.isLoggedIn = true;
        },
        [logIn.rejected](state) {
            toast.error("Log in error");
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            toast.success("log out success");
            state.isLoggedIn = false;
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});

export const authReducer = authSlice.reducer;
