import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/navbar';

export default function Articles() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yieldguild');
                const data = await res.json();
                const items = data.items.slice(0, 3);
                setItems(items);
            } catch {
                setError(true);
            }
        }

        fetchData();
    }, []);

    if (error) {
        return (
            <section>
                <div>
                    <h3>Latest Articles</h3>
                    <ul>
                        <p>Failed to fetch data, please try again later.</p>
                    </ul>
                    <a
                        href={"https://kevin-jonathan.medium.com/"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Read on Medium
                    </a>
                </div>
            </section>
        );
    }

    return (


        <>
            <Head>
                <title>YGG Ventures</title>
                <meta name='description' content='YGG Venture' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/yggShield.png' />
            </Head>
            <main className={styles.main}>
                <NavBar />



                <div className={`${styles.blogCard}`}>
                    <h1 > Yield Guild Games (YGG)</h1>
                    <section>
                        <div>
                            <h2 className={styles.underline}>Latest Articles</h2>
                            <ul>
                                {items.map((item, index) => (
                                    <div key={index}>
                                        <a href={item.link} target={"_blank"} rel={"noreferrer"}>
                                            <h3>{item.title}</h3>
                                        </a>
                                    </div>
                                ))}
                            </ul>
                            <a
                                href={"https://kevin-jonathan.medium.com/"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                            >
                                Read More on Medium
                            </a>
                        </div>
                    </section>
                </div>




                {/* <form className={styles.form}>
                <h2 className={inter.className}>Subscribe for updates</h2>
                <br />
                <input type="email" placeholder="Enter your email address" className={styles.input} />
                <br />
                <button type="submit" className={styles.button}>Subscribe</button>
              </form> */}



            </main>
        </>
    );
}


