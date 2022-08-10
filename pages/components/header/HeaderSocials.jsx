import React from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import styles from './header.module.css';

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      {/* eslint-disable react/jsx-no-target-blank */}
      <a
        href='https://www.linkedin.com/in/jia-zun-pee-94770717a/'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/kenny-pee-dev' target='_blank'>
        <FaGithub />
      </a>
      {/* eslint-disable react/jsx-no-target-blank */}
    </div>
  );
};

export default HeaderSocials;
