import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

import { profileApi } from '@/store/services/profileService.ts';

export type Profile = {
    userId: number;
    name: string;
    lastName: string;
    phone?: string;
    email?: string;
    profilePicture: string;
};

const initialState: Profile = {
    userId: 0,
    name: '',
    lastName: '',
    phone: '',
    email: '',
    profilePicture: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    selectors: {
        selectProfilePicture: (state) => state.profilePicture,
        selectProfileEmail: (state) => state.email,
        selectProfileGeneral: createSelector(
            (state: Profile) => state,
            (profile) => ({
                name: profile.name,
                lastName: profile.lastName,
                phone: profile.phone,
            })
        ),
    },
    reducers: {
        saveProfilePicture: (state, action: PayloadAction<string>) => {
            state.profilePicture = action.payload;
        },
        clearProfile: (state) => {
            state.userId = 0;
            state.name = '';
            state.lastName = '';
            state.phone = '';
            state.email = '';
            state.profilePicture = '';
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            profileApi.endpoints.editProfile.matchFulfilled,
            (state, { payload }: PayloadAction<Profile>) => {
                state.name = payload.name;
                state.lastName = payload.lastName;
                state.phone = payload.phone;
            }
        );
        builder.addMatcher(
            profileApi.endpoints.editEmail.matchFulfilled,
            (state, { payload }: PayloadAction<Profile>) => {
                state.email = payload.email;
            }
        );
    },
});

export const profileReducer = profileSlice.reducer;
export const { saveProfilePicture, clearProfile } = profileSlice.actions;
export const { selectProfilePicture, selectProfileGeneral, selectProfileEmail } =
    profileSlice.selectors;
