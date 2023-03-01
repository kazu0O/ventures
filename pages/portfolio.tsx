import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { NavBar } from '../components/navbar';
import { GameCard } from '../components/gamecard';

const inter = Inter({ subsets: ['latin'] });

export default function Portfolio() {
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
