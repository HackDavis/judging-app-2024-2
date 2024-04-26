'use client';
import Image from 'next/image';

import styles from './JudgingProgress.module.scss';
import duck from '/public/hackers/flag_duck.svg';

import { useJudgingProgress } from '@hooks/useJudgingProgress';

export default function JudgingProgress() {
  const { finished, total, percent } = useJudgingProgress();
  return (
    <div className={styles.container}>
      <h3>Hold on tight...</h3>
      <p>
        Our HD judges have submitted {finished} out of {total} submissions. Hang
        tight we’re almost there!
      </p>
      <div className={styles.progress_container}>
        <div className={styles.flag_duck}>
          <div className={styles.flag}>
            <div className={styles.fabric}>
              <p className={styles.percentage}>{percent}% done!</p>
            </div>
            <div className={styles.pole} />
          </div>
          <Image src={duck} alt="Duck holding flag!" />
        </div>
        <div className={styles.progress_box}>
          <div className={styles.progress_num_container}>
            <p className={styles.progress_num} style={{ left: `${percent}%` }}>
              {finished}
            </p>
          </div>
          <div className={styles.bar_holder}>
            <div
              className={styles.bar}
              style={{ right: `${100 - percent}%` }}
            />
          </div>
          <div className={styles.scale_nums}>
            <p>0</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
