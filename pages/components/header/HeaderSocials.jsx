import React from 'react';
import styles from './header.module.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
      {/* eslint-disable react/jsx-no-target-blank */}
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      {/* eslint-disable react/jsx-no-target-blank */}
    </div>
  );
};

export default HeaderSocials;
