import React, { useState } from 'react';
import Head from 'next/head';
import { InView } from 'react-intersection-observer';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import About from './components/about/About';
import { useGlobalStore } from '../store/useGlobalStore';

export default function Home() {
  const setActiveView = useGlobalStore((state) => state.setActiveView);

  const handleViewChange = (flag, componentId) => {
    if (flag) {
      setActiveView(componentId);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to my portfolio!</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <InView
          as='div'
          onChange={(inView) => {
            handleViewChange(inView, '#header');
          }}
        >
          <Header />
        </InView>
        <Navigation />
        <InView
          as='div'
          onChange={(inView) => {
            handleViewChange(inView, '#about');
          }}
        >
          <About />
        </InView>
      </main>
    </div>
  );
}
