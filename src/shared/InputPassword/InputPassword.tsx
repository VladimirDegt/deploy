import cls from './InputPassword.module.css';
import { Text } from '@/shared/Text/Text.tsx';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from 'react-hook-form';
import { FormInputType } from '@/components/ParcelCreateForm/ParcelCreateForm.tsx';
import { ReactElement, useRef, useState } from 'react';
import { Placeholder } from '@/shared/Placeholder/Placeholder.tsx';
import { ParcelFormInputType } from '@/components/ParcelCreateForm/ParcelFormInputType.ts';
import { Button } from '@/shared/Button/Button.tsx';
import { IconEyeOpen } from '@/shared/svg/IconEyeOpen.tsx';
import { IconEyeClose } from '@/shared/svg/IconEyeClose.tsx';
import { UserCredentialsFormType } from '@/shared/UserCredentialsForm/UserCredentialsForm.tsx';

export type InputType = {
    name: keyof ParcelFormInputType | keyof UserCredentialsFormType;
    label: string;
    icon?: ReactElement;
    placeholder: string;
    error: Merge<FieldError, FieldErrorsImpl<{ name: string }>> | undefined;
    register: UseFormRegister<FormInputType>;
};

export const InputPassword = (props: InputType) => {
    const { name, label, icon, placeholder, error, register } = props;
    const [isOpenEye, setIsOpenEye] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const { ref, ...rest } = register(name);

    const handlePlaceholderClick = () => inputRef.current?.focus();
    const handlePasswordIconClick = () => setIsOpenEye((prevState) => !prevState);

    return (
        <div className={cls.container}>
            <label htmlFor={name} className={cls.label}>
                <Text size='headline3_bold' color='primary' className={cls.label_name}>
                    {label}
                </Text>
            </label>
            <input
                id={name}
                type={isOpenEye ? 'text' : 'password'}
                {...register(name)}
                placeholder={icon ? '' : placeholder}
                className={cls.input}
                {...rest}
                ref={(e) => {
                    ref(e);
                    inputRef.current = e;
                }}
            />
            {icon && (
                <Placeholder
                    icon={icon}
                    text={placeholder}
                    addStyle={cls.placeholder}
                    onClick={handlePlaceholderClick}
                />
            )}
            <Button
                className={cls.container_icon_eye}
                type='button'
                variant='icon'
                onClick={handlePasswordIconClick}
            >
                {isOpenEye ? (
                    <IconEyeOpen addStyle={cls.icon_eye} />
                ) : (
                    <IconEyeClose addStyle={cls.icon_eye} />
                )}
            </Button>
            {error && (
                <Text size='body4_font_bold' color='red' className={cls.error}>
                    {error.message}
                </Text>
            )}
        </div>
    );
};
