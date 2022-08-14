import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/images/Logo.png';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <div className={styles.line}></div>
            {/* Header div */}
            <div className={styles.header}>
                <div>
                   <Link href='/'><Image src={Logo} height='80px' width='80px' alt='Sarim Hassan' /></Link>
                </div>
                <div>
                    <ul className={styles.headerMenu}>
                        <li><Link href='/Projects'>Projects</Link></li>
                        <li><Link href='/About'>About</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
