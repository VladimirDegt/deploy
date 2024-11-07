import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/utils/const.ts';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: ({ email, password }) => ({
                url: '/auth/signin',
                method: 'POST',
                body: { email, password },
            }),
        }),
        signup: builder.mutation({
            query: ({ email, password }) => ({
                url: '/auth/signup',
                method: 'POST',
                body: { email, password },
            }),
        }),
        signout: builder.query({
            query: () => '/auth/signout',
            keepUnusedDataFor: 0,
        }),
    }),
});

export const { useSigninMutation, useSignupMutation, useSignoutQuery } = authApi;
