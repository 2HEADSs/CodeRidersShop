import './Register.css';

export default function Register() {
    return (
        <div className="register-container">
            <form className="register-form">
                <h2>Register</h2>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        required
                    />
                </div>

                <button type="submit" className="register-button">Register</button>

                <div className="login-link">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </form>
        </div>
    );
}
