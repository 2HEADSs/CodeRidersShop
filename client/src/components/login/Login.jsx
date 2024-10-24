import styles from './Login.module.css'

import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuthentication';


export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            //TODO: error handling
            console.log(error.message);
        }
    }
    const initialValues = { email: '', password: '' };
    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <div className={styles.loginContainer}>
            <form
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
                </div>

                <button type="submit" className={styles.loginButton}>Login</button>
                <div className={styles.registerLink}>
                    Don't have an account? <a href="/register">Click here!</a>
                </div>
            </form>
        </div>
    );
}