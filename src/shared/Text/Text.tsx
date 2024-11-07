import { type TextVariants, textVariants } from './text-variants.ts';
import { ComponentPropsWithRef } from 'react';

export type TextProps = ComponentPropsWithRef<'p'> & TextVariants;

const Text = ({ children, size, color, variant, className, ...props }: TextProps) => {
    return (
        <p {...props} className={textVariants({ size, color, variant, className })}>
            {children}
        </p>
    );
};

export { Text };
