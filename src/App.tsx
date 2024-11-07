import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LayoutWithoutAvatar from '@/components/LayoutWithoutAvatar/LayoutWithoutAvatar.tsx';

const SignIn = lazy(async () => await import('./pages/SignIn/SignIn'));

export const App = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path='/signin' element={<LayoutWithoutAvatar />}>
                    <Route index element={<SignIn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
