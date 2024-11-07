import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/utils/const.ts';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Profile'],
    endpoints: (builder) => ({
        editProfile: builder.mutation({
            query: (profile): FetchArgs => ({
                url: '/api/profile',
                method: 'PUT',
                body: profile,
            }),
        }),
        editEmail: builder.mutation({
            query: (email): FetchArgs => ({
                url: '/api/profile/email',
                method: 'PUT',
                body: email,
            }),
        }),
    }),
});

export const { useEditProfileMutation, useEditEmailMutation } = profileApi;
