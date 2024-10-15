import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="nav-item">Home</a>
                </div>
                <div className="navbar-right">
                    <a href="/login" className="nav-item">Login</a>
                    <a href="/register" className="nav-item">Register</a>
                    <a href="/catalog" className="nav-item">Catalog</a>
                    <a href="/user" className="nav-item">User</a>
                </div>
            </nav>
        </header>
    );
}

