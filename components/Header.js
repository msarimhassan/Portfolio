import React from 'react';
import styles from '../styles/Header.module.css';
export default function Header() {

    return (
        <div>
            <div className={styles.line}></div>
            {/* Header div */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding:'10px' }}>
                <div className='logo'>SarimHassan</div>
                <div>
                    <ul style={{ display: 'flex', listStyleType: 'none' }}>
                        <li style={{ margin: '10px' }}>Projects</li>
                        <li style={{ margin: '10px' }}>About</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
