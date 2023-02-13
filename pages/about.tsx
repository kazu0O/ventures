import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>YGG Ventures</title>
        <meta name='description' content='YGG Venture' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/yggShield.png' />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href='/'>
            {' '}
            <Image
              className={styles.yggLogo}
              src='/yggShield.png'
              alt='YGG Ventures Logo'
              width={80}
              height={100}
              priority
            />
          </Link>
          {/* start nav menu */}
          <div className={styles.grid}>
            <Link
              href='/pages/about'
              id={styles.link1}
              target='_blank'
              rel='noopener noreferrer'
              type='disabled'
            >
              <h2 className={inter.className}>About -&gt;</h2>
            </Link>

            <Link
              href='/pages/portfolio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2 className={inter.className}>Portfolio -&gt;</h2>
            </Link>

            <Link
              href='/pages/contact'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2 className={inter.className}>Contact -&gt;</h2>
            </Link>

            <Link
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              className={styles.nav}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2 className={inter.className}>
                <span className={styles.textGradient}>Blog -&gt;</span>
              </h2>
              {/* <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p> */}
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src='/yggventures2.png'
              alt='ygg ventures'
              width={700}
              height={350}
              priority
            />
          </div>
          {/* <form className={styles.form}>
            <h2 className={inter.className}>Subscribe for updates</h2>
            <br />
            <input type="email" placeholder="Enter your email address" className={styles.input} />
            <br />
            <button type="submit" className={styles.button}>Subscribe</button>
          </form> */}
        </div>

        <div className={styles.footer}>
          <code>© 2023. All rights reserved.</code>
        </div>
      </main>
    </>
  );
}
