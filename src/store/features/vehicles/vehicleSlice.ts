import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { vehicleApi } from '@/store/services/vehicleService.ts';

export type Vehicle = {
    VehicleId: number;
    VehicleType: string;
    ModelName: string;
};

const initialState: Vehicle[] = [];

const VehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    selectors: {
        selectVehicles: (state) => state,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            vehicleApi.endpoints.getVehicles.matchFulfilled,
            (state, { payload }: PayloadAction<Vehicle[]>) => {
                if (state.length === 0) state.push(...payload);
                state.map((vehicle) => {
                    const findVehicle = payload.find((v) => v.VehicleId === vehicle.VehicleId);
                    return findVehicle ? { ...vehicle, ...findVehicle } : vehicle;
                });
            }
        );

        builder.addMatcher(
            vehicleApi.endpoints.deleteVehicle.matchFulfilled,
            (state, { payload }: PayloadAction<Vehicle>) =>
                state.filter((v) => v.VehicleId !== payload.VehicleId)
        );
    },
});

export const vehicleReducer = VehicleSlice.reducer;
export const { selectVehicles } = VehicleSlice.selectors;
