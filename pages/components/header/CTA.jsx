import { Button, IconButton, Modal, Tooltip } from '@mui/material';
import dynamic from 'next/dynamic';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import styles from './header.module.css';

const PDFViewer = dynamic(() => import('../pdfViewer'), {
  ssr: false,
});

function CTA() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.cta}>
      <Modal open={showModal} onClose={toggleModal}>
        <div className={styles.modalDiv}>
          <PDFViewer />
          <Tooltip
            title='Close PDF'
            color='info'
            style={{
              height: '50px',
            }}
          >
            <IconButton onClick={toggleModal}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Modal>
      <Button
        variant='outlined'
        href={`https://t.me/realkennyboi`}
        color='info'
      >
        Let&apos;s Talk!
      </Button>
      <Button variant='outlined' onClick={toggleModal} color='info'>
        View CV
      </Button>
    </div>
  );
}

export default CTA;
