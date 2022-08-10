import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Document } from 'react-pdf';
import styles from './header.module.css';

function CTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.cta}>
      <Document file='https://s3.ap-southeast-1.amazonaws.com/kennypee.com/resume.pdf' />
      <Button
        variant='contained'
        className='btn btn-primary'
        href={`mailto:test@example.com`}
      >
        Let&apos;s Talk!
      </Button>
      <Button
        variant='contained'
        className='btn btn-primary'
        href={`mailto:test@example.com`}
      >
        Download CV
      </Button>
    </div>
  );
}

export default CTA;
