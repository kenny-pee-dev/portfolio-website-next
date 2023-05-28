import React from 'react';
import Head from 'next/head';
import { InView } from 'react-intersection-observer';
import styles from '../styles/Home.module.css';
import Header from './components/header/Header';
import Navigation from './components/nav/Navigation';
import { useGlobalStore } from '../store/useGlobalStore';
import Skills from './components/skills/Skills';
import About from './components/about/About';

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
        <title>Home | Kenny Pee</title>
        <meta
          name='description'
          content="Portfolio website of Kenny Pee, a software engineer currently working at Padlet. Explore Kenny's expertise in software development, web applications, and problem-solving. Connect with Kenny to discuss anything about software engineering and collaborate on innovative solutions."
        />
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
        <InView
          as='div'
          onChange={(inView) => {
            handleViewChange(inView, '#about');
          }}
        >
          <About />
        </InView>
        <InView
          as='div'
          onChange={(inView) => {
            handleViewChange(inView, '#skills');
          }}
        >
          <Skills />
        </InView>
        <Navigation />
      </main>
    </div>
  );
}
