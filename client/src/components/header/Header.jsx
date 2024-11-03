import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.navbarHomeLink}>
                    <Link to="/" className={styles.navItem}>Home</Link>
                </div>
                <div className={styles.navbarRightLink}>
                    < Link to="/bikes" className={styles.navItem}>Bikes</Link>
                    {isAuthenticated
                        ? <>
                            <Link to="/create" className={styles.navItem}>Add Bike</Link>
                            <Link to="/user" className={styles.navItem}>User</Link>
                            <Link to="/logout" className={styles.navItem}>Logout</Link>
                        </>
                        : <>
                            <Link to="/login" className={styles.navItem}>Login</Link>
                            <Link to="/register" className={styles.navItem}>Register</Link>
                        </>

                    }

                </div>
            </nav>
        </header >
    );
}