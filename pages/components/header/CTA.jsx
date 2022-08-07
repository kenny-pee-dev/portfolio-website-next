import React from 'react';
import styles from './header.module.css';
// import CV from '../../../assets/kenny_resume.pdf';

const CTA = () => {
  return (
    <div className={styles.cta}>
      {/* <a href={CV} download className="btn">
        Download CV
      </a> */}
      <a
        href="mailto:jiazunwork@gmail.com"
        target="_top"
        className="btn btn-primary"
      >
        Let&apos;s Talk!
      </a>
    </div>
  );
};

export default CTA;
