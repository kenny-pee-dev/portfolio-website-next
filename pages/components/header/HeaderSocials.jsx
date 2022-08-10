import React from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import styles from './header.module.css';

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      {/* eslint-disable react/jsx-no-target-blank */}
      <a href='https://linkedin.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='_blank'>
        <FaGithub />
      </a>
      {/* eslint-disable react/jsx-no-target-blank */}
    </div>
  );
};

export default HeaderSocials;
