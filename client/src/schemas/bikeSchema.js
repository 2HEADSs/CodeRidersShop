import * as yup from 'yup';

export const BikeCreateSchema = yup.object({
    model: yup
        .string()
        .required('Model is required')
        .min(2, 'Model should be at least 2 characters long'),
    manufacturer: yup
        .string()
        .required('Manufacturer is required'),
    color: yup
        .string()
        .required('Color is required')
        .min(3, 'Color should be at least 3 characters long'),
    engineCapacity: yup
        .number()
        .typeError('Engine Capacity must be a number')
        .required('Engine Capacity is required')
        .positive('Engine Capacity must be a positive number')
        .integer('Engine Capacity must be an integer'),
    price: yup
        .number()
        .typeError('Price must be a number')
        .required('Price is required')
        .positive('Price must be a positive number'),
    year: yup
        .number()
        .typeError('Year must be a number')
        .required('Year is required')
        .min(1885, 'Year cannot be earlier than 1885')
        .max(new Date().getFullYear(), 'Year cannot be in the future'),
    img: yup
        .string()
        .url('Image URL must be a valid URL')
        .required('Image is required'),
    description: yup
        .string()
        .required('Description is required')
        .min(10, 'Description should be at least 10 characters long'),
}).required();