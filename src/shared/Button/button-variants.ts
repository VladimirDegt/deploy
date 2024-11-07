import { cva, type VariantProps } from 'class-variance-authority';
import cls from './Button.module.css';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva(cls.button, {
    variants: {
        size: {
            tab: cls.tab_size,
            submit: cls.submit_size,
            confirm: cls.confirm_size,
        },
        variant: {
            icon: cls.icon,
            tab: cls.tab,
            submit: cls.submit,
            cancel: cls.cancel,
            confirm: cls.confirm,
        },
        background: {
            secondary: cls.background_secondary,
            white: cls.background_white,
            primary: cls.background_primary,
            red: cls.background_red,
        },
    },
});
