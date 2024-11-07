import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '@/shared/Loader/Loader.tsx';
import { HeaderWithoutAvatar } from '@/components/HeaderWithoutAvatar/HeaderWithoutAvatar.tsx';

const LayoutWithoutAvatar = () => {
    return (
        <Suspense fallback={<Loader />}>
            <HeaderWithoutAvatar />
            <Outlet />
        </Suspense>
    );
};

export default LayoutWithoutAvatar;
