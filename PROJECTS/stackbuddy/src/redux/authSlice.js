import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import envrionment from "../environment";

const initialState = {
    loading: false,
    isLoggedIn: false,
    token: '',
    user: {},
    error: ''
}

export const loginUser = createAsyncThunk('user/login', async (data) => {
    return await axios.post(`${envrionment.authUrl}/login`, data)
        .then(res => res.data);
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            state.error = '';
            state.token = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, state => {
            state.loading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.error = action.error.message;
        })
    }
})

export default authSlice.reducer;
export const authActions = authSlice.actions;