import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '@/store/services/authService.ts';

const initialState = {
    token: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    selectors: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.signin.matchFulfilled,
            (state, { payload }) => (state.token = payload.token)
        );
    },
});
export const authReducer = authSlice.reducer;
