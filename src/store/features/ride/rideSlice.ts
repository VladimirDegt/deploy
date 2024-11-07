import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ride, RideAcceptedParcels, RideGeneralInfoType } from '@/store/features/ride/types.ts';
import { rideApi } from '@/store/services/rideService.ts';

const initialState: Ride[] = [];

const rideSlice = createSlice({
    name: 'ride',
    initialState,
    selectors: {
        selectRides: (state) => state,
        selectRideById: (state, rideId: number) => state.find((ride) => ride.rideId === rideId),
        selectRideAcceptedParcels: (state, rideId: number, parcelId: number) =>
            state
                .find((ride) => ride.rideId === rideId)
                ?.acceptedParcelList?.find((parcel) => parcel.parcelId === parcelId),
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            rideApi.endpoints.getRides.matchFulfilled,
            (state, { payload }: PayloadAction<RideGeneralInfoType[]>) => {
                if (state.length === 0) state.push(...payload);
                state.map((ride) => {
                    const findRide = payload.find((r) => r.rideId === ride.rideId);
                    return findRide ? { ...ride, ...findRide } : ride;
                });
            }
        );
        builder.addMatcher(
            rideApi.endpoints.getRideById.matchFulfilled,
            (state, { payload }: PayloadAction<RideGeneralInfoType>) => {
                const updateRides = state.map((ride) => {
                    return ride.rideId === payload.rideId ? { ...ride, ...payload } : ride;
                });
                return updateRides;
            }
        );
        builder.addMatcher(
            rideApi.endpoints.getRideAcceptedParcels.matchFulfilled,
            (state, { payload }: PayloadAction<RideAcceptedParcels[]>) => {
                const updateRide = state.map((ride) => {
                    if (!payload.length) return { ...ride, acceptedParcelList: [] };
                    return ride.rideId === payload[0].rideId
                        ? { ...ride, acceptedParcelList: payload }
                        : ride;
                });
                return updateRide;
            }
        );
        builder.addMatcher(
            rideApi.endpoints.createRide.matchFulfilled,
            (state, { payload }: PayloadAction<RideGeneralInfoType>) => {
                const updateRide = state.map((ride) => {
                    return ride.rideId === payload.rideId ? { ...ride, ...payload } : ride;
                });
                return updateRide;
            }
        );
    },
});

export const rideReducer = rideSlice.reducer;
export const { selectRides, selectRideById, selectRideAcceptedParcels } = rideSlice.selectors;
