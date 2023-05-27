import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='header' className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <h5>Hello I&apos;m</h5>
        <h1>Kenny!</h1>
        <div className='flex items-center justify-center'>
          <h5 className='text-light'>Software Engineer at </h5>
          <div className='ml-1 w-20 h-10 relative'>
            {/* adjust the size as needed */}
            <Image layout='fill' src='/padlet.png' alt='me' />
          </div>
        </div>
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <img src='/me.png' alt='me' />
        </div>

        <a href='#contact' className={styles.scroll__down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
