import { useState } from 'react';
import styles from './ModuleButton.module.css'

export default function ModuleButton() {
    const [active,setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

    return(
        <button 
        className={`${styles.btn} ${styles.add} ${active ? styles.active : ''}`}
        onClick={handleClick}>{active ? 'クリック' : 'クリック済み'}</button>
    );
}