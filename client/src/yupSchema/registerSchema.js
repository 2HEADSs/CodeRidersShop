import * as yup from 'yup'

export const RegisterSchema =
    yup.object({
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup
            .string()
            .required('Password is required')
            //TODO: Change minLenght
            .min(3, 'Password should be minimum 8 characters - one of them special')
            .matches(
                /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                'Password must include at least one number and one special character'
            ),
        repass: yup
            .string()
            .required('Confirm password is required ')
            .oneOf([yup.ref('password')], 'Password missmatch')
    })
        .required()

