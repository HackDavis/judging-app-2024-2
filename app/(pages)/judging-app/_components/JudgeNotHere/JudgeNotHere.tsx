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

  // return time.format('mm:ss'); // Format time as needed
  return time;
};

export default function JudgeNotHere() {
  const curTime = useTimer();

  // Ensuring two digits for minutes and seconds
  const minutesString = curTime.minutes().toString().padStart(2, '0');
  const secondsString = curTime.seconds().toString().padStart(2, '0');

  // Splitting into individual digits
  const minuteDigits = minutesString.split('');
  const secondDigits = secondsString.split('');
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
          <div className={styles.container_timer_card}>
            <h1>{minuteDigits[0]}</h1>
          </div>
          <div className={styles.container_timer_card}>
            <h1>{minuteDigits[1]}</h1>
          </div>
          {/*  */}
          <div className={styles.container_timer_colon}>
            <h1>:</h1>
          </div>
          {/*  */}
          <div className={styles.container_timer_card}>
            <h1>{secondDigits[0]}</h1>
          </div>
          <div className={styles.container_timer_card}>
            <h1>{secondDigits[1]}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
