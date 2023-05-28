import React from 'react';
import Image from 'next/image';
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
      <a href='https://github.com/strawhatduckk' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://padlet.com/about/about-us-3n0xnxd514ce/wish/2322549046' target='_blank'>
        <Image width={24} height={24} src='/padlet_icon.png' alt='me' />
      </a>
    </div>
  );
};

export default HeaderSocials;
