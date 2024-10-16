import styles from './Login.module.css'


export default function Login() {
    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm}>
                <h2>Login</h2>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                    />
                </div>

                <button type="submit" className={styles.loginButton}>Login</button>
                <div className={styles.registerLink}>
                    Don't have an account? <a href="/register">Register</a>
                </div>
            </form>
        </div>
    );
}