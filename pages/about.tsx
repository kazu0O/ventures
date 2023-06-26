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
        
         
           
            <div className={`${styles.card}`}>
            <h1 > Yield Guild Games (YGG)</h1>
            <br />
            <h3 >
              A top web3 gaming guild, is entering the venture capital space, raising $75 million for its first fund.
            </h3>

            <p>
              The fund&apos;s mandate is to invest in early-stage token and equity deals in web3, gaming studios and the infrastructure that supports the growth of the industry to benefit the LPs [limited partners] of YGG Ventures Fund I, reads the fund&apos;s pitch deck, which was obtained by The Block. YGG co-founder Beryl Li confirmed the formation of YGG Ventures and the fund&apos;s targeted amount.
            </p>

            <p>
              We are just about to begin raising from LPs for the fund, Li said. She is now also a director of YGG Ventures, according to the pitch deck. Li will be part of the fund&apos;s investment committee as well, along with Gabby Dizon, another co-founder of YGG, and Jeff Holmberg, head of asset acquisition at YGG, who will transition to partner at YGG Ventures. Holmberg will oversee the fund&apos;s strategy and day-to-day operations in his new role and manage a team of gaming analysts, according to the deck.
            </p>
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
