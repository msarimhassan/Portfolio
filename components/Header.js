import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/images/Logo_SH.png';

export default function Header() {
    return (
        <>
            <div className={styles.line}></div>
            {/* Header div */}
            <div className={styles.header}>
                <div>
                    <Image src={Logo} height='100px' width='150px' alt='Sarim Hassan' />
                </div>
                <div>
                    <ul className={styles.headerMenu}>
                        <li>Projects</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
