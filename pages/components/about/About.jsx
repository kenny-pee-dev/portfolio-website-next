import React from 'react';
import { Chrono } from 'react-chrono';
import { Card, CardContent } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import styles from './about.module.css';

const About = () => {
  const items = [
    {
      title: 'May 2021',
      cardTitle: 'Graduated from National University of Singapore',
    },
    {
      title: 'May 2021',
      cardTitle: 'Graduated from National University of Singapore',
    },
  ];

  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h1>About me</h1>
      <div className={styles.container}>
        <div className={styles.about__content}>
          <Chrono
            items={items}
            mode='VERTICAL_ALTERNATING'
            cardHeight={1}
            hideControls={true}
          />
          {/* <Card variant='outlined' className={styles.about__card}>
              <CardContent>
                <h5>Experience</h5>
                <small>1+ Years Working Experience</small>
                <br />
                <WorkOutlineIcon />
              </CardContent>
            </Card>

            <Card variant='outlined' className={styles.about__card}>
              <CardContent>
                <h5>Experience</h5>
                <small>1+ Years Working Experience</small>
                <br />
                <WorkOutlineIcon />
              </CardContent>
            </Card>

            <Card variant='outlined' className={styles.about__card}>
              <CardContent>
                <h5>Experience</h5>
                <small>1+ Years Working Experience</small>
                <br />
                <WorkOutlineIcon />
              </CardContent>
            </Card> */}
        </div>
      </div>
    </section>
  );
};

export default About;
