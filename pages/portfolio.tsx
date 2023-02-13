import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import { GameCard } from '../components/gamecard';

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
        {/* start nav menu */}

        <div id='nav-container'>
          {/* start nav menu */}
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

          <Link
            href='/portfolio'
            className={styles.nav}
            rel='noopener noreferrer'
          >
            <h2 id='portfolio-about' className={inter.className}>
              Portfolio -&gt;
            </h2>
          </Link>

          <Link
            href='/pages/contact'
            className={styles.nav}
            rel='noopener noreferrer'
          >
            <h2 id='contact-about' className={inter.className}>
              Contact -&gt;
            </h2>
          </Link>

          <Link
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.nav}
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              <span id='blog-about' className={styles.textGradient}>
                Blog -&gt;
              </span>
            </h2>
            {/* <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p> */}
          </Link>
        </div>
        <div className='portfolio-container'>
          <GameCard />
        </div>

        <div className={styles.footer}>
          <code>© 2023. All rights reserved.</code>
        </div>
      </main>
    </>
  );
}
