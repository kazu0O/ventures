import Link from 'next/link';
import Image from 'next/image';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const NavBar = () => {
  return (
    <div id='nav-container'>
      <div id='nav-logo-container'>
        <Link href='/'>
          {' '}
          <Image
            id='ygg-logo'
            src='/yggShield.png'
            alt='YGG Ventures Logo'
            width={80}
            height={100}
            priority
          />
        </Link>
      </div>
      <div id='nav-links-container'>
        <Link href='/about' rel='noopener noreferrer'>
          <h2 id='nav-about' className={inter.className}>
            About -&gt;
          </h2>
        </Link>

        <Link href='/portfolio' rel='noopener noreferrer'>
          <h2 id='portfolio-about' className={inter.className}>
            Portfolio -&gt;
          </h2>
        </Link>

        <Link href='/contact' rel='noopener noreferrer'>
          <h2 id='contact-about' className={inter.className}>
            Contact -&gt;
          </h2>
        </Link>

        <Link
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            <span id='blog-about'>Blog -&gt;</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};
