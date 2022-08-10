import React from 'react';
import styles from './header.module.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <h5>Hello I&apos;m</h5>
        <h1>Kenny!</h1>
        <h5 className='text-light'>Full-stack Developer</h5>
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
