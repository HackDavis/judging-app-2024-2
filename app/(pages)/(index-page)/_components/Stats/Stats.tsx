'use client';
import styles from './Stats.module.scss';
import React, { useEffect, useState, useRef } from 'react';
interface CountUpProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const countUpRef = useRef<HTMLDivElement>(null);

  const isVisible = (ref: React.RefObject<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    return rect && rect.top < window.innerHeight && rect.bottom >= 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (countUpRef.current && isVisible(countUpRef) && !start) {
        setStart(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [start]);

  useEffect(() => {
    if (start) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const currentCount = Math.min(end, (progress / duration) * end);
        setCount(currentCount);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [start, end, duration]);

  return (
    <div ref={countUpRef}>
      {start && (
        <>
          {prefix}
          {Math.floor(count)}
          {suffix}
        </>
      )}
    </div>
  );
};

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles['background-container']}>
        <div className={styles['numbers-words-container']}>
          <div className={styles['number-word-pair']}>
            <span className={styles.number}>
              <CountUp end={140} duration={2000} suffix="+" />
            </span>
            <span className={styles.word}>projects</span>
          </div>
          <div className={styles['number-word-pair']}>
            <span className={styles.number}>
              <CountUp end={15} duration={2000} prefix="$" suffix="k+" />
            </span>
            <span className={styles.word}>prizes</span>
          </div>
          <div className={styles['number-word-pair']}>
            <span className={styles.number}>
              <CountUp end={750} duration={2000} suffix="+" />
            </span>
            <span className={styles.word}>hackers</span>
          </div>
          <div className={styles['number-word-pair']}>
            <span className={styles.number}>
              <CountUp end={36} duration={2000} />
            </span>
            <span className={styles.word}>hours</span>
          </div>
        </div>
        <button className={styles.button}>
          <span className={styles['button-words']}>Sponsor 2024</span>
        </button>
      </div>
    </div>
  );
};

export default Stats;
export { CountUp };
