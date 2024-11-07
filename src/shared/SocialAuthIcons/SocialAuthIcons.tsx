import cls from './SocialAuthIcons.module.css';
import { IconGoogle } from '@/shared/svg/IconGoogle.tsx';
import { Button } from '@/shared/Button/Button.tsx';
import { IconApple } from '@/shared/svg/IconApple.tsx';
import { IconFacebook } from '@/shared/svg/IconFacebook.tsx';

export const SocialAuthIcons = () => {
    return (
        <ul className={cls.container} data-testid='socialAuthIcons'>
            <li>
                <Button type='button' variant='icon' className={cls.btn}>
                    <IconGoogle addStyle={cls.icon} />
                </Button>
            </li>
            <li>
                <Button type='button' variant='icon' className={cls.btn}>
                    <IconApple addStyle={cls.icon} />
                </Button>
            </li>
            <li>
                <Button type='button' variant='icon' className={cls.btn}>
                    <IconFacebook addStyle={cls.icon} />
                </Button>
            </li>
        </ul>
    );
};
