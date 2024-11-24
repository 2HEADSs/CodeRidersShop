import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuthentication';
import { useForm } from '../../hooks/useForm';
import styles from './Register.module.css';
import { useState } from 'react';
import { RegisterSchema } from '../../Schemas/registerSchema';


const initialValues = { email: '', password: '', repass: '' }

export default function Register() {
    const [validationErrors, setValidationErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, repass }) => {

        try {
            await RegisterSchema.validate(values, { abortEarly: false });
            setValidationErrors({});
            setServerError('')
            await register(email, password, repass);
            navigate('/');
        } catch (error) {
            if (error.name === 'ValidationError') {

                const errors = error.inner.reduce((acc, err) => {
                    acc[err.path] = err.message;
                    return acc;
                }, {});
                setValidationErrors(errors);
            } else {
                setValidationErrors({});
                console.error('Unexpected error:', error.message);
                setServerError(error.message);
            }
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <div className={styles.registerContainer}>
            <form
                className={styles.registerForm}
                onSubmit={submitHandler}
            >
                <h2>Register</h2>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="Enter your email (e.g., you@example.com)"
                    // required
                    />
                    {validationErrors.email && <p className={styles.validationError}>{validationErrors.email}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        value={values.password}
                        onChange={changeHandler}
                        placeholder="Enter your password"
                    // required
                    />
                    {validationErrors.password && <p className={styles.validationError}>{validationErrors.password}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="repass">Confirm Password</label>
                    <input
                        type="password"
                        id="repass"
                        name='repass'
                        value={values.repass}
                        onChange={changeHandler}
                        placeholder="Repeat your password"
                    // required
                    />
                    {validationErrors.repass && <p className={styles.validationError}>{validationErrors.repass}</p>}
                </div>

                {serverError && <p className={styles.serverError}>{serverError}</p>}

                <button type="submit" className={styles.registerButton}>Register</button>

                <div className={styles.loginLink}>
                    Already have an account? <a href="/login">Click here!</a>
                </div>
            </form>
        </div>
    );
}
