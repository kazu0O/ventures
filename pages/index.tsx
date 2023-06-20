import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { NavBar } from '../components/navbar';

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
        <NavBar />
        <div className={styles.center}>
  <div className={styles.responsiveImage}>
    <Image
      className={`${styles.logo}`}
      src='/yggShield.png'
      alt='ygg ventures'
      layout="responsive"
      width={270}
      height={330}
    />
  </div>
</div>

        <div className={styles.footer}>
          <code>© 2023. All rights reserved.</code>
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
