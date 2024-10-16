import styles from './Register.module.css'; // Import the CSS module

export default function Register() {
    return (
        <div className={styles.registerContainer}>
            <form className={styles.registerForm}>
                <h2>Register</h2>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        required
                    />
                </div>

                <button type="submit" className={styles.registerButton}>Register</button>

                <div className={styles.loginLink}>
                    Already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </div>
    );
}
