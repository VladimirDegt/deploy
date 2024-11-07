import * as Yup from 'yup';

export const ValidateSchemaUserCredentialsForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('This field is required'),
    password: Yup.string()
        .trim()
        .min(6, 'Minimum 6 characters')
        .max(50, 'Maximum 50 characters')
        .required('This field is required'),
});
