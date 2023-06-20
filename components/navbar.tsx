import Link from 'next/link';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export const NavBar = () => {
  return (
    <div id='nav-container'>
      <div id='nav-logo-container'>
        <Link href='/'>
          {' '}
          <Image
            
            id='ygg-logo'
            src='/ygg.png'
            alt='YGG Ventures Logo'
            width={288/2}
            height={106/2}
            
          
          
          />
        </Link>
      </div>
      <div id='nav-links-container'>
      
        <Link href='/about' rel='noopener noreferrer'>
          <h2 id='nav-about' className={inter.className}>
            About
          </h2>
        </Link>

        <Link href='/portfolio' rel='noopener noreferrer'>
          <h2 id='portfolio-about' className={inter.className}>
            Portfolio
          </h2>
        </Link>

        <Link href='/contact' rel='noopener noreferrer'>
          <h2 id='contact-about' className={inter.className}>
            Contact
          </h2>
        </Link>

        <Link
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          rel='noopener noreferrer'
        >
          <h2 className={inter.className}>
            <span id='blog-about'>Blog</span>
          </h2>
        </Link>
      </div>
      <style jsx>{`
  #nav-container {
    width: 100%;
    display: flex;
    align-items: center;
  }

  #nav-links-container {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    flex-grow: 1;
  }

  #nav-links-container h2 {
    position: relative;
    margin: 0;
    padding: 0;
    transition: color 0.3s ease-in-out;
  }

  #nav-links-container h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, black, darkcyan);
    transition: width 0.3s ease-in-out;
  }

  #nav-links-container h2:hover::after {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    #nav-container {
      flex-direction: column;
      align-items: center;
    }

    #nav-links-container {
      justify-content: center;
      gap: 10px;
    }

    #ygg-logo {
      margin-bottom: 20px;
    }
  }
`}</style>







    </div>
  );
};

