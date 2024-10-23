import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.navbarHomeLink}>
                    <Link to="/" className={styles.navItem}>Home</Link>
                </div>
                <div className={styles.navbarRightLink}>
                    <Link to="/login" className={styles.navItem}>Login</Link>
                    <Link to="/register" className={styles.navItem}>Register</Link>
                    <Link to="/catalog" className={styles.navItem}>Bikes</Link>
                    <Link to="/user" className={styles.navItem}>User</Link>
                    <Link to="/addBike" className={styles.navItem}>Add</Link>
                </div>
            </nav>
        </header>
    );
}