import styles from './Login.module.css'

import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuthentication';
import { LoginSchema } from '../../Schemas/loginSchema';
import { useState } from 'react';


const initialValues = { email: '', password: '' };
export default function Login() {
    const [validationErrors, setValidationErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        setServerError('');
        setValidationErrors({})
        setLoading(true)
        try {
            await LoginSchema.validate(values, { abortEarly: false });
            setValidationErrors({});
            setServerError('');
            await login(email, password);
            navigate('/');
        } catch (error) {
            if (error.name === 'ValidationError') {

                const errors = error.inner.reduce((acc, err) => {
                    acc[err.path] = err.message;
                    return acc;
                }, {});
                setValidationErrors(errors);
                setLoading(false);
                console.log(validationErrors);
            } else {
                setValidationErrors({});
                console.error('Unexpected error:', error.message);
                setServerError(error.message);
                setLoading(false)
            }
        }
    }
    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (

        <div className={styles.loginContainer}>
            {!loading && <form
                className={styles.loginForm}
                onSubmit={submitHandler}
            >
                <h2>Login</h2>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="Enter your email (e.g., you@example.com)"
                    />
                    {validationErrors.email && <p className={styles.validationError}>{validationErrors.email}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        placeholder="Enter your password"
                    />
                    {validationErrors.password && <p className={styles.validationError}>{validationErrors.password}</p>}
                </div>

                {
                    serverError &&
                    <div className={styles.serverError}>
                        {serverError && <p>{serverError}</p>}
                        {serverError && <p >Please try again!</p>}
                    </div>
                }

                <button type="submit" className={styles.loginButton}>Login</button>

                <div className={styles.registerLink}>
                    Don't have an account? <a href="/register">Click here!</a>
                </div>
            </form>}
            {loading && (
                <div className={styles.loadingContainer}>
                    <div className={styles.spinner}></div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
}