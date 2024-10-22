import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuthentication';
import { useForm } from '../../hooks/useForm';
import styles from './Register.module.css';



export default function Register() {
    const register = useRegister();
    const navigate = useNavigate();
    const initialValues = { email: '', password: '', repass: '' }
    const registerHandler = async ({ email, password, repass }) => {
        try {
            await register(email, password, repass);
            navigate('/')
        } catch (error) {
            console.log(error.message);
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

                <button type="submit" className={styles.registerButton}>Register</button>

                <div className={styles.loginLink}>
                    Already have an account? <a href="/login">Click here!</a>
                </div>
            </form>
        </div>
    );
}
