'use client';
import styles from './JudgeNotHere.module.scss';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNextHelpTimer } from '@hooks/useNextHelpTimer';

//2.5hrs judging => 1hr 15 min halves => 1hr 10 min phases + 10 min gap => notify director at 1 hour mark

export default function JudgeNotHere() {
  const { pending, timeTill, ended } = useNextHelpTimer();

  const seconds = timeTill > 3600 ? 99 : pending || ended ? 0 : timeTill % 60;
  const minutes =
    timeTill > 3600 ? 99 : pending || ended ? 0 : (timeTill - seconds) / 60;

  const secondDigits =
    seconds < 10 ? '0'.concat(seconds.toString()) : seconds.toString();

  const minuteDigits =
    minutes < 10 ? '0'.concat(minutes.toString()) : minutes.toString();

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
        </div>
        <div className={styles.container_button} onClick={DirectorNoti}>
          <NotificationsNoneOutlinedIcon />
          <a href="https://forms.gle/WHMb1W8Z2sCwvTxu6" target="_blank">
            <p>Notify a Director</p>
          </a>
        </div>
      </div>
    </div>
  );
}
