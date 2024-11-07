import { ComponentPropsWithRef } from 'react';
import { type ButtonVariants, buttonVariants } from './button-variants.ts';

export type ButtonProps = ComponentPropsWithRef<'button'> & ButtonVariants;

const Button = ({
    children,
    type,
    size,
    variant,
    background,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            {...props}
            className={buttonVariants({ size, variant, background, className })}
        >
            {children}
        </button>
    );
};

export { Button };
