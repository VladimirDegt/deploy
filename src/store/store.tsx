import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { parcelApi } from '../store/services/parcelService.ts';
import { rideApi } from '@/store/services/rideService.ts';
import { switchersReducer } from './features/switchersSlice.ts';
import { parcelReducer } from '@/store/features/parcel/parcelSlice.ts';
import { rideReducer } from '@/store/features/ride/rideSlice.ts';
import { profileReducer } from '@/store/features/profile/profileSlice.ts';
import { profileApi } from '@/store/services/profileService.ts';
import { vehicleReducer } from '@/store/features/vehicles/vehicleSlice.ts';
import { vehicleApi } from '@/store/services/vehicleService.ts';
import { authReducer } from '@/store/features/auth/authSlice.ts';

const profilePersistConfig = {
    key: 'wanderways_profile',
    storage,
};

const rootReducer = combineReducers({
    [parcelApi.reducerPath]: parcelApi.reducer,
    [rideApi.reducerPath]: rideApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
    switchers: switchersReducer,
    parcel: parcelReducer,
    ride: rideReducer,
    profile: persistReducer(profilePersistConfig, profileReducer),
    vehicle: vehicleReducer,
    auth: authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(parcelApi.middleware)
            .concat(rideApi.middleware)
            .concat(profileApi.middleware)
            .concat(vehicleApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
