import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Projects.module.css';
import axios from 'axios';
export default function projects({ projects }) {
    console.log({ projects });
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <Header />
            <main>
                <div className={styles.container}>
                    <div>
                        <div className={styles.headingContainer}>
                            <h1>Projects</h1>
                            <h3>OpenSource Project developed and available on github</h3>
                        </div>
                        {/* project Container */}
                        <div className={styles.cardContainer}>
                            {projects.map((project)=>{
                                return (
                                   <a href={project.html_url} target='_blank'><div className={styles.card}>
                                        <h2>{project.name}</h2>
                                        <p>{project.description}</p>
                                    </div></a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export async function getStaticProps() {
    const res = await axios.get('https://api.github.com/users/msarimhassan/repos');
    console.log({ res });
    const projects = res.data;
    return {
        props: {
            projects,
        },
    };
}
