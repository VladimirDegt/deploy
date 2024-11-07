import { ReactElement } from 'react';

import cls from './Placeholder.module.css';
import { Text } from '@/shared/Text/Text.tsx';

type PlaceholderSelectProps = {
    icon: ReactElement;
    text: string;
    addStyle?: string;
    onClick?: () => void;
};

export const Placeholder = ({ icon, text, addStyle, onClick }: PlaceholderSelectProps) => {
    return (
        <div className={`${cls.container} + ${addStyle}`} onClick={onClick}>
            {icon}
            <Text size='body3_font_bold' color='secondary'>
                {text}
            </Text>
        </div>
    );
};
