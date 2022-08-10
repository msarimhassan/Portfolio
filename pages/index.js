import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Sarim Hassan</title>
                    <meta name='description' content='Generated by create next app' />
                    <link rel='icon' href='/favicon.ico' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100&family=Raleway:wght@100;400&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <Header />
                <main>
                    <div className={styles.main}>
                        <h1 className={styles.title}>Sarim Hassan</h1>

                        <p className={styles.description}>
                            <span className={styles.highlight}>Web Developer</span>, Mobile
                            Application Developer,{' '}
                            <span className={styles.highlight}>Frontend Engineer @TheHexaa</span>
                            {/* <code className={styles.code}>pages/index.js</code> */}
                        </p>
                        <div className={styles.grid}>
                            <h3>Projects</h3>
                            <div className={styles.card}>
                                <h2>Open Source Projects &rarr;</h2>
                                <p>Check out my open source projects.</p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    );
}