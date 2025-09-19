import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import './header.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src='https://www.aia.co.kr/etc.clientlibs/kr-wise/clientlibs/clientlib-site/resources/images/icons/aia-logo-red.svg' />
                </Link>
            </div>

        </header>
    );
}

export default Header;