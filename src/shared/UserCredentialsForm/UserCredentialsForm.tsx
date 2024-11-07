import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import cls from './UserCredentialsForm.module.css';
import { Input } from '@/shared/Input/Input.tsx';
import { IconEmail } from '@/shared/svg/IconEmail.tsx';
import { InputPassword } from '@/shared/InputPassword/InputPassword.tsx';
import { IconLockClose } from '@/shared/svg/IconLockClose.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { Text } from '@/shared/Text/Text.tsx';
import { clearProfile, selectProfileEmail } from '@/store/features/profile/profileSlice.ts';
import { ValidateSchemaUserCredentialsForm } from '@/shared/UserCredentialsForm/ValidateSchemaUserCredentialsForm.ts';
import notification from '@/utils/NotificationManager.ts';
import { Loader } from '@/shared/Loader/Loader.tsx';

export type UserCredentialsFormProps = {
    handleUserAction: (
        data: UserCredentialsFormType
    ) => Promise<
        | { data: Partial<UserCredentialsFormType> }
        | { error: FetchBaseQueryError | SerializedError }
    >;
    isLoading: boolean;
    messageSuccess: string;
    messageError: string;
    additionNode?: ReactNode;
    btnText: string;
};

export type UserCredentialsFormType = {
    email: string;
    password: string;
};

export const UserCredentialsForm = (props: UserCredentialsFormProps) => {
    const { handleUserAction, isLoading, messageSuccess, messageError, additionNode, btnText } =
        props;
    const email = useSelector(selectProfileEmail);
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    if (pathname === '/signin') dispatch(clearProfile());
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserCredentialsFormType>({
        resolver: yupResolver(ValidateSchemaUserCredentialsForm),
        mode: 'onSubmit',
        defaultValues: {
            email: email,
        },
    });

    const onSubmit: SubmitHandler<UserCredentialsFormType> = async (data) => {
        const response = await handleUserAction({
            email: data.email,
            password: data.password,
        });
        if ('data' in response) {
            notification.showSuccess(messageSuccess);
        } else if ('error' in response) {
            notification.showError(messageError);
        }
    };

    if (isLoading) return <Loader />;
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} data-testid='userCredentialsForm'>
                <ul className={cls.container_list}>
                    <li>
                        <Input
                            name='email'
                            type='email'
                            label='Email'
                            icon={<IconEmail />}
                            placeholder='Email'
                            error={errors.email}
                            register={register}
                        />
                    </li>
                    <li>
                        <InputPassword
                            name='password'
                            label='Password'
                            placeholder='Password'
                            error={errors.password}
                            icon={<IconLockClose />}
                            register={register}
                        />
                    </li>
                </ul>
                {additionNode}
                <Button
                    variant='submit'
                    type='submit'
                    background='primary'
                    size='submit'
                    className={cls.btn}
                >
                    <Text size='body2_font_bold' color='white'>
                        {btnText}
                    </Text>
                </Button>
            </form>
        </>
    );
};
