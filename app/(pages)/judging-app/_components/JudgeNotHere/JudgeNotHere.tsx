'use client';
// import Image from 'next/image';
import styles from './JudgeNotHere.module.scss';
import moment from 'moment';
import { useEffect, useState } from 'react';

const useTimer = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time.format('mm:ss'); // Format time as needed
};

export default function JudgeNotHere() {
  const curTime = useTimer();

  return (
    <div className={styles.judgeNotHere}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2>Judge not yet here?</h2>
          <p>
            Please let us know if your project hasn't been evaluated at least
            once when the time expires!
          </p>
        </div>
        <div className={styles.container_timer}>
          {/* <div className={styles.container_timer_mins}>{curTime}</div> */}
          <h1>{curTime}</h1>
        </div>
      </div>
    </div>
  );
}
