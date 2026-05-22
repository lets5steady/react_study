// src/components/Header.jsx
import ThemeButton from "../ThemeButton/ThemeButton";
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <h1>Theme Sample</h1>
            {/* <ThemeButton /> */}
            <ThemeButton />
        </header>
    );
}

export default Header;