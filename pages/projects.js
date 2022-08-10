import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/About.module.css';
export default function projects() {
    return (
        <div className={styles.body}>
            <Head>
                <title>Projects</title>
            </Head>
            <Header />
            <main>
                <div>
                    <div>
                        <h1>Projects</h1>
                        <p className={styles.subtitle}>
                            Open Source Project developed and available on github
                        </p>
                    </div>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <h2>Writy</h2>
                            <p>Generate Beauituful html sites without writing any code</p>
                        </div>
                        <div className={styles.card}>
                            <h2>Writy</h2>
                            <p>Generate Beauituful html sites without writing any code</p>
                        </div>
                        <div className={styles.card}>
                            <h2>Writy</h2>
                            <p>Generate Beauituful html sites without writing any code</p>
                        </div>
                        <div className={styles.card}>
                            <h2>Writy</h2>
                            <p>Generate Beauituful html sites without writing any code</p>
                        </div>
                        <div className={styles.card}>
                            <h2>Writy</h2>
                            <p>Generate Beauituful html sites without writing any code</p>
                        </div>
                        <div className={styles.card}>
                            <h2>Writy</h2>
                            <p>Generate Beauituful html sites without writing any code</p>
                        </div>
                        <div className={styles.card}>
                            <h2>Writy</h2>
                            <p>Generate Beauituful html sites without writing any code</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
