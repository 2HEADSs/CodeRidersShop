import { useState } from 'react'

export function useForm(initialValues, submitCallback) {

    const [values, setValues] = useState(initialValues);


    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        //TODO: validate form data
        submitCallback(values)
    };

    return {
        values,
        changeHandler,
        submitHandler
    };

}