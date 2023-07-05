import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/navbar';
import { useRouter } from 'next/router';

export default function Articles() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yieldguild');
                const data = await res.json();
                setItems(data.items);
            } catch {
                setError(true);
            }
        }

        fetchData();
    }, []);

    if (error) {
        // error handling code as before
    }

    if (id !== undefined) {
        const item = items[id];
        return (
            <div>
                <h1>{item.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
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
                    <h1> Yield Guild Games (YGG)</h1>
                    <section>
                        <div>
                            <h2 className={styles.underline}>Latest Articles</h2>
                            <ul>
                                {items.map((item, index) => (
                                    <div key={index}>
                                        <Link href={`/articles/${index}`}>
                                            <h3 className={`${styles.titleHover}`}>{item.title}</h3>
                                        </Link>
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
            </main>
        </>
    );
}
