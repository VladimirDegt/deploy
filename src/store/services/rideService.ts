import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/utils/const.ts';

export const rideApi = createApi({
    reducerPath: 'rideApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Ride'],
    endpoints: (builder) => ({
        getRides: builder.query({
            query: (): string => `/api/rides`,
            keepUnusedDataFor: 0,
        }),
        getRideById: builder.query({
            query: (rideId): string => `/api/rides/${rideId}`,
            keepUnusedDataFor: 0,
        }),
        getRideAcceptedParcels: builder.query({
            query: (rideId): string => `/api/rides/${rideId}/accepted`,
            keepUnusedDataFor: 0,
        }),
        createRide: builder.mutation({
            query: (newRide): FetchArgs => ({
                url: '/api/rides',
                method: 'POST',
                body: newRide,
            }),
        }),
        getAvailableRides: builder.query({
            query: (): string => '/api/rides/available',
            keepUnusedDataFor: 0,
        }),
    }),
});

export const {
    useGetRidesQuery,
    useGetRideByIdQuery,
    useGetRideAcceptedParcelsQuery,
    useCreateRideMutation,
    useGetAvailableRidesQuery,
} = rideApi;
