import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>
              🏠 Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className={styles.navLink}>
              👤 Mi Perfil
            </Link>
          </li>
          <li>
            <Link to="/catalog" className={styles.navLink}>
              🏪 Catálogo
            </Link>
          </li>
          <li>
            <Link to="/transfers" className={styles.navLink}>
              💸 Transferencias
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
