import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuthentication';
import { useForm } from '../../hooks/useForm';
import styles from './Register.module.css';
import { useState } from 'react';


const initialValues = { email: '', password: '', repass: '' }

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();
    const registerHandler = async ({ email, password, repass }) => {
        if (password !== repass) {
            return setError('Password missmatch!');
        }

        try {
            await register(email, password, repass);
            setError('');
            navigate('/');
        } catch (error) {
            console.log(error.message);
            setError(error.message);
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
                        required
                    />
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
                        required
                    />
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
                        required
                    />
                </div>

                {error && (<p>{error}</p>)}

                <button type="submit" className={styles.registerButton}>Register</button>

                <div className={styles.loginLink}>
                    Already have an account? <a href="/login">Click here!</a>
                </div>
            </form>
        </div>
    );
}
