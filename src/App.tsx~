import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LayoutWithoutAvatar from '@/components/LayoutWithoutAvatar/LayoutWithoutAvatar.tsx';
import { ArrowBack } from '@/shared/ArrowBack/ArrowBack.tsx';

const Home = lazy(async () => await import('./pages/Home/Home'));
const Parcel = lazy(async () => await import('./pages/Parcel/Parcel'));
const Ride = lazy(async () => await import('./pages/Ride/Ride'));
const ParcelCreate = lazy(async () => await import('./pages/ParcelCreate/ParcelCreate'));
const RideCreate = lazy(async () => await import('./pages/RideCreate/RideCreate'));
const AvailableParcels = lazy(
    async () => await import('./pages/AvailableParcels/AvailableParcels')
);
const AvailableDrivers = lazy(
    async () => await import('./pages/AvailableDrivers/AvailableDrivers')
);
const Profile = lazy(async () => await import('./pages/Profile/Profile'));
const ProfileGeneral = lazy(async () => await import('./pages/ProfileGeneral/ProfileGeneral'));
const ProfileEmail = lazy(async () => await import('./pages/ProfileEmail/ProfileEmail'));
const MyVehicles = lazy(async () => await import('./pages/MyVehicles/MyVehicles'));
const ProfileVehicle = lazy(async () => await import('./pages/ProfileVehicle/ProfileVehicle'));
const RideParcelRequests = lazy(
    async () => await import('./pages/RideParcelRequests/RideParcelRequests')
);
const SignIn = lazy(async () => await import('./pages/SignIn/SignIn'));
const SignUp = lazy(async () => await import('./pages/SignUp/SignUp'));

export const App = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='parcel/:id' element={<Parcel />} />
                    <Route path='ride/:id' element={<Ride />} />
                    <Route path='parcel' element={<ParcelCreate />} />
                    <Route path='ride' element={<RideCreate />} />
                    <Route path='ride/vehicle' element={<ArrowBack />} />
                    <Route path='available-parcels' element={<AvailableParcels />} />
                    <Route path='available-drivers' element={<AvailableDrivers />} />
                    <Route path='ride/:id/requested' element={<RideParcelRequests />} />
                </Route>
                <Route path='profile' element={<LayoutWithoutAvatar />}>
                    <Route index element={<Profile />} />
                    <Route path='general' element={<ProfileGeneral />} />
                    <Route path='email' element={<ProfileEmail />} />
                    <Route path='vehicles' element={<MyVehicles />} />
                    <Route path='new-vehicle' element={<ProfileVehicle />} />
                </Route>
                <Route path='/signin' element={<LayoutWithoutAvatar />}>
                    <Route index element={<SignIn />} />
                </Route>
                <Route path='/signup' element={<LayoutWithoutAvatar />}>
                    <Route index element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
