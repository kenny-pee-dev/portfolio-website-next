import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiVuedotjs,
  SiRubyonrails,
  SiExpress,
  SiNestjs,
  SiTailwindcss,
  SiPython,
  SiTypescript,
  SiJavascript,
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';

import { FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import React from 'react';
import styles from './skills.module.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h1>Relevant skills</h1>
      <h5>My stacks!</h5>
      <div className={styles.container}>
        <div className='bg-ash-grey p-10 rounded-[2rem] transition duration-400 ease-in-out hover:bg-ash-grey-hover hover:ring-2'>
          <h3>Frontend Development</h3>
          <div className={styles.content}>
            <article className={styles.details}>
              <TbBrandNextjs className={styles.details_icon} />
              <h4>NextJS</h4>
            </article>

            <article className={styles.details}>
              <SiReact className={styles.details_icon} />
              <h4>React</h4>
            </article>

            <article className={styles.details}>
              <SiVuedotjs className={styles.details_icon} />
              <h4>VueJS</h4>
            </article>

            <article className={styles.details}>
              <SiHtml5 className={styles.details_icon} />
              <h4>HTML</h4>
            </article>
            <article className={styles.details}>
              <SiTailwindcss className={styles.details_icon} />
              <h4>TailwindCSS</h4>
            </article>

            <article className={styles.details}>
              <SiCss3 className={styles.details_icon} />
              <h4>CSS</h4>
            </article>
          </div>
        </div>

        <div className='bg-ash-grey p-10 rounded-[2rem] transition duration-400 ease-in-out hover:bg-ash-grey-hover hover:ring-2'>
          <h3>Backend Development</h3>
          <div className={styles.content}>
            <article className={styles.details}>
              <SiRubyonrails className={styles.details_icon} />
              <h4>Rails</h4>
            </article>
            <article className={styles.details}>
              <FaNodeJs className={styles.details_icon} />
              <h4>NodeJS</h4>
            </article>

            <article className={styles.details}>
              <SiExpress className={styles.details_icon} />
              <h4>ExpressJS</h4>
            </article>

            <article className={styles.details}>
              <SiNestjs className={styles.details_icon} />
              <h4>NestJS</h4>
            </article>

            <article className={styles.details}>
              <GrMysql />
              <h4>MySQL</h4>
            </article>
          </div>
        </div>

        <div className='bg-ash-grey p-10 rounded-[2rem] transition duration-400 ease-in-out hover:bg-ash-grey-hover hover:ring-2'>
          <h3>Programming Languages</h3>
          <div className={styles.content}>
            <article className={styles.details}>
              <SiRubyonrails className={styles.details_icon} />
              <h4>Ruby</h4>
            </article>
            <article className={styles.details}>
              <SiJavascript className={styles.details_icon} />
              <h4>Javascript</h4>
            </article>

            <article className={styles.details}>
              <SiTypescript className={styles.details_icon} />
              <h4>Typescript</h4>
            </article>

            <article className={styles.details}>
              <SiPython className={styles.details_icon} />
              <h4>Python</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
