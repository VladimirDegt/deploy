import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Parcel, ParcelGeneralInfoType } from '@/store/features/parcel/types.ts';
import { parcelApi } from '@/store/services/parcelService.ts';

const initialState: Parcel[] = [];

const parcelSlice = createSlice({
    name: 'parcel',
    initialState,
    selectors: {
        selectParcels: (state) => state,
        selectParcelById: (state, parcelId: number) =>
            state.find((parcel) => parcel.parcelId === parcelId),
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            parcelApi.endpoints.getParcels.matchFulfilled,
            (state, { payload }: PayloadAction<ParcelGeneralInfoType[]>) => {
                if (state.length === 0) state.push(...payload);
                state.map((parcel) => {
                    const findParcel = payload.find((p) => p.senderId === parcel.senderId);
                    return findParcel ? { ...parcel, ...findParcel } : parcel;
                });
            }
        );
        builder.addMatcher(
            parcelApi.endpoints.getParcelById.matchFulfilled,
            (state, { payload }: PayloadAction<Parcel>) => {
                const updateParcels = state.map((parcel) => {
                    return parcel.parcelId === payload.parcelId
                        ? { ...parcel, ...payload }
                        : parcel;
                });

                return updateParcels;
            }
        );
        builder.addMatcher(
            parcelApi.endpoints.createParcel.matchFulfilled,
            (state, { payload }: PayloadAction<Parcel>) => {
                const updateParcels = state.map((parcel) => {
                    return parcel.parcelId === payload.parcelId
                        ? { ...parcel, ...payload }
                        : parcel;
                });

                return updateParcels;
            }
        );
    },
});

export const parcelReducer = parcelSlice.reducer;
export const { selectParcels, selectParcelById } = parcelSlice.selectors;
