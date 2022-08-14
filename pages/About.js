import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Myself from '../assets/images/Sarim.png';
import styles from '../styles/About.module.css';
import { Icons } from '../common';
export default function about() {
    const { AI } = Icons;
    return (
        <div>
            <Head>
                <title>About Me</title>
            </Head>
            <Header />
            <main>
                <div className={styles.container}>
                    {/* All contents goes here */}
                    <div>
                        {/* image and name */}
                        <div className={styles.introContainer}>
                            <div className={styles.imageContainer}>
                                <Image src={Myself} layout='intrinsic' alt='Sarim' />
                            </div>
                            <div className={styles.intro}>
                                <h1>Sarim Hassan</h1>
                                <h3 className={styles.subtitle}>Software Engineer</h3>
                            </div>
                        </div>
                        <div>
                            <p className={styles.lines}>
                                Computer Science Engineer having interest in web-designing and
                                development with an eye for detail.
                            </p>
                        </div>
                        {/* buttons */}
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <a href='https://github.com/msarimhassan' rel='noopener noreferrer'>
                                <div className={styles.githubbtn}>
                                    <AI.AiFillGithub size={20} />
                                    <span className={styles.btnText}>github</span>
                                </div>
                            </a>
                            <a
                                href='https://www.linkedin.com/in/msarimhassan'
                                rel='noopener noreferrer'
                            >
                                <div className={styles.linkedinbtn}>
                                    <AI.AiFillLinkedin size={20} />
                                    <span className={styles.btnText}>linkedin</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
