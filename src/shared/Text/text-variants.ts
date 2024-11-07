import { cva, type VariantProps } from 'class-variance-authority';
import cls from './Text.module.css';

export type TextVariants = VariantProps<typeof textVariants>;

export const textVariants = cva(cls.text, {
    variants: {
        size: {
            title_font_bold: cls.title_font_bold,
            display_font_bold: cls.display_font_bold,
            headline1_bold: cls.headline1_bold,
            headline2_bold: cls.headline2_bold,
            headline3_bold: cls.headline3_bold,
            body1_font_bold: cls.body1_font_bold,
            body2_font_bold: cls.body2_font_bold,
            body3_font_bold: cls.body3_font_bold,
            body4_font_bold: cls.body4_font_bold,
            body4_font_700: cls.body4_font_700,
        },
        color: {
            primary: cls.color_primary,
            secondary: cls.color_secondary,
            white: cls.color_white,
            red: cls.color_red,
            blue: cls.color_blue,
        },
        variant: {
            left: cls.variant_left,
            right: cls.variant_right,
            center: cls.variant_center,
        },
    },
});
