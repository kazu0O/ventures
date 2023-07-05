import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import Head from 'next/head';
import { NavBar } from '../../components/navbar'

export default function Article() {
    const router = useRouter();
    const { id } = router.query;
    const [article, setArticle] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yieldguild');
                const data = await res.json();
                const article = data.items[id];
                setArticle(article);
            } catch {
                setArticle(null);
            }
        }

        fetchData();
    }, [id]);

    if (!article) {
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
                    <p>Loading...</p>
                </main>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{article.title}</title>
                <meta name='description' content={article.description} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/yggShield.png' />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <div className={styles.blogCard}>
                    <h1>{article.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
            </main>
        </>
    );
}
