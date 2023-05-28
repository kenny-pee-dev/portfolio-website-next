import React, { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const Skills = () => {
  const isBreakpoint = useMediaQuery(768);
  const memeSize = isBreakpoint ? 200 : 300;
  return (
    <section id='about' className='flex'>
      <div className='flex flex-row justify-center item-center gap-5'>
        {!isBreakpoint ? (
          <div className='flex justify-center items-center'>
            <Image
              width={memeSize}
              height={memeSize}
              src='/meme.jpeg'
              alt='padlet_icon'
            />
          </div>
        ) : (
          <div />
        )}
        <div className='flex flex-col justify-center items-start gap-6 mx-4 bg-grey-900/20 md:w-1/2'>
          <h1>Hello stranger!</h1>
          {isBreakpoint ? (
            <div className='flex justify-center items-center w-full'>
              <Image
                width={memeSize}
                height={memeSize}
                src='/meme.jpeg'
                alt='padlet_icon'
              />
            </div>
          ) : (
            <div />
          )}
          <p>🇸🇬 A Full Stack Software Engineer based in Singapore.</p>

          <p>
            🎓 I've graduated from the National University of Singapore with a
            degree in Statistics, specializing in Data Science.
          </p>

          <p>
            🗄 Previously worked at{' '}
            <a href='https://www.stat.nus.edu.sg/consulting/data-analytics-consulting-centre/'>
              NUS Data Analytics Consulting Center
            </a>{' '}
            as a research intern + teaching assistant, at{' '}
            <a href='https://www.dbs.com/careers/structured-programmes/seed-programme'>
              DBS Singapore SEED programme
            </a>
            , and a crypto startup.
          </p>

          <p>
            📈 Honing my peak badassery at{' '}
            <a href='https://padlet.com'>Padlet</a> since 2022.
          </p>

          <p>
            🤖 Other than programming, you can either catch me{' '}
            <a href='https://steamcommunity.com/id/zinovif5/'>
              playing games 🕹
            </a>
            , lifting weights 🏋🏻, bowling 🎳 or doing anything active.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
