import React from 'react';
import styles from '../styles/Footer.module.css';
import { Icons } from '../common';

const Footer = () => {
    const { AI } = Icons;
    return (
        <footer className={styles.footer}>
            <div className={styles.iconContainer}>
                <a href='https://github.com/msarimhassan' target='_blank'>
                    <AI.AiFillGithub size={30} className={styles.icon} />
                </a>
                <a href='https://twitter.com/msarimhassan' target='_blank'>
                    <AI.AiOutlineTwitter size={30} className={styles.icon} color='#1DA1F2' />
                </a>
                <a href='https://www.linkedin.com/in/msarimhassan' target='_blank'>
                    <AI.AiFillLinkedin size={30} className={styles.icon} color='#0077B5' />
                </a>
            </div>
            <div>
                <p>© 2022 . Sarim Hassan</p>
            </div>
        </footer>
    );
};

export default Footer;
