import { BASE_URL } from '@/utils/const.ts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vehicleApi = createApi({
    reducerPath: 'vehicleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Vehicle'],
    endpoints: (builder) => ({
        getVehicles: builder.query({
            query: (): string => '/api/profile/vehicle',
            keepUnusedDataFor: 0,
        }),
        deleteVehicle: builder.mutation({
            query: (vehicleId) => ({
                url: '/api/profile/vehicle/delete',
                method: 'DELETE',
                body: { vehicleId },
            }),
        }),
        createVehicle: builder.mutation({
            query: (data) => ({
                url: '/api/profile/vehicle',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetVehiclesQuery, useDeleteVehicleMutation, useCreateVehicleMutation } =
    vehicleApi;
