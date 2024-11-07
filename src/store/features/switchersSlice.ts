import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HomeSwitcher = 'Parcels' | 'Rides';
export type RideSwitcher = 'From Senders' | 'My Requests';

export type InitialStateOption = {
    homeSwitcher: HomeSwitcher;
    rideSwitcher: RideSwitcher;
};

const initialState: InitialStateOption = {
    homeSwitcher: 'Parcels',
    rideSwitcher: 'From Senders',
};

const switchersSlice = createSlice({
    name: 'switchers',
    initialState,
    selectors: {
        selectHomeSwitcherValue: (state) => state.homeSwitcher,
        selectRideSwitcherValue: (state) => state.rideSwitcher,
    },
    reducers: {
        setHomeSwitcherValue: (state, action: PayloadAction<HomeSwitcher>) => {
            state.homeSwitcher = action.payload;
        },
        setRideSwitcherValue: (state, action: PayloadAction<RideSwitcher>) => {
            state.rideSwitcher = action.payload;
        },
    },
});

export const switchersReducer = switchersSlice.reducer;
export const { setHomeSwitcherValue, setRideSwitcherValue } = switchersSlice.actions;
export const { selectHomeSwitcherValue, selectRideSwitcherValue } = switchersSlice.selectors;
