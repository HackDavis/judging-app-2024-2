'use client';
// import Image from 'next/image';
import styles from './JudgeNotHere.module.scss';
import moment from 'moment';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useEffect, useState } from 'react';

//2.5hrs judging => 1hr 15 min halves => 1hr 10 min phases + 10 min gap => notify director at 1 hour mark

const useTimer = (timerDuration: number) => {
  const [time, setTime] = useState(moment.duration(timerDuration, 'minutes'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => moment.duration(time.asSeconds() - 1, 'seconds'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
};

export default function JudgeNotHere() {
  const startHalf1 = '2024-04-28T15:00:00.000-07:00';
  const startHalf2 = '2024-04-28T16:20:00.000-07:00';
  let timerDuration = (Date.now() - Date.parse(startHalf1)) / 1000 / 60;

  const roundDuration = 60;
  if (timerDuration > 60) {
    timerDuration = (Date.now() - Date.parse(startHalf2)) / 1000 / 60;
  }
  const timerStart = roundDuration - timerDuration;
  const curTime = useTimer(timerStart);

  // Ensuring two digits for minutes and seconds
  const minutesString = curTime.minutes().toString().padStart(2, '0');
  const secondsString = curTime.seconds().toString().padStart(2, '0');

  // Splitting into individual digits
  const minuteDigits = minutesString.split('');
  const secondDigits = secondsString.split('');

  const DirectorNoti = () => {
    console.log('clicked');
  };
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
          <div className={styles.container_timer_mins}>
            <div className={styles.time}>
              <div className={styles.time_card}>
                <h1>{minuteDigits[0]}</h1>
              </div>
              <div className={styles.time_card}>
                <h1>{minuteDigits[1]}</h1>
              </div>
            </div>
            <div className={styles.container_timer_mins_text}>
              <p>Minutes</p>
            </div>
          </div>
          <div className={styles.container_timer_colon}>
            <h1>:</h1>
          </div>
          <div className={styles.container_timer_secs}>
            <div className={styles.time}>
              <div className={styles.time_card}>
                <h1>{secondDigits[0]}</h1>
              </div>
              <div className={styles.time_card}>
                <h1>{secondDigits[1]}</h1>
              </div>
            </div>
            <div className={styles.container_timer_secs_text}>
              <p>Seconds</p>
            </div>
          </div>
          {/*  */}
        </div>
        <div className={styles.container_button} onClick={DirectorNoti}>
          <NotificationsNoneOutlinedIcon />
          <p>Notify a Director</p>
        </div>
      </div>
    </div>
  );
}
