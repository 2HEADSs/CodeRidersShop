import { useEffect, useState } from 'react'

export function useForm(initialValues, submitCallback) {

    const [values, setValues] = useState(initialValues);;

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues])

    const changeHandler = (e) => {
        const { name, type, value, checked } = e.target;

        setValues(state => ({
            ...state,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        submitCallback(values)
        setValues(initialValues)
    };

    return {
        values,
        changeHandler,
        submitHandler,
    };

}