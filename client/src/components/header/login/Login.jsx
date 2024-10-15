import './Login.css';


export default function Login() {
    return (
        <div className="login-container">
            <form className="login-form" >
                <h2>Login</h2>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                    />
                </div>

                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}