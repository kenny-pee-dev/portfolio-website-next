import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiMaterialui,
  SiPython,
  SiJavascript,
  SiExpress,
  SiNestjs,
  SiMysql,
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';

import { FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import React from 'react';
import styles from './skills.module.css';

const Skills = () => {
  return (
    <section id='skills'>
      <h1>Skillz I have</h1>
      <h5>My stack</h5>
      <div className={styles.container}>
        <div className={styles.skills_card}>
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
              <SiMaterialui className={styles.details_icon} />
              <h4>MaterialUI</h4>
            </article>

            <article className={styles.details}>
              <SiHtml5 className={styles.details_icon} />
              <h4>HTML</h4>
            </article>

            <article className={styles.details}>
              <SiCss3 className={styles.details_icon} />
              <h4>CSS</h4>
            </article>
          </div>
        </div>

        <div className={styles.skills_card}>
          <h3>Backend Development</h3>
          <div className={styles.content}>
            <article className={styles.details}>
              <SiPython className={styles.details_icon} />
              <h4>Python</h4>
            </article>
            <article className={styles.details}>
              <SiJavascript className={styles.details_icon} />
              <h4>Javascript</h4>
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
      </div>
    </section>
  );
};

export default Skills;
