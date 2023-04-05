import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { NavBar } from '../components/navbar';

export default function About() {
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
        

        <div className={styles.footer}>
          <code>© 2023. All rights reserved.</code>
        </div>
      </main>
    </>
  );
}
