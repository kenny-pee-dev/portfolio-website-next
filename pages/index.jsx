import React from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import About from './components/about/About';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to my portfolio!</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <Navigation />
        <About />
      </main>
    </div>
  );
}
