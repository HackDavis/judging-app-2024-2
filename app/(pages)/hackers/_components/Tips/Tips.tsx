'use client';
import { useState } from 'react';
import styles from './Tips.module.scss';

export default function Tips() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxPosition = 4;
  const smallestPosition = 0;

  const tipsArray = [
    "Take a deep breath. It'll help you both organize your thoughts and your presentation better!",
    'Practice your pitch multiple times, ensuring you explain your project, its purpose and its unique features.',
    'Plan the flow of your demo to highlight key functionalities and how they address the problem statement or challenge.',
    'Even if there are flaws or limitations in your project, maintain a positive attitude and focus on the strengths and your achievements.',
    'If you start feeling overwhelmed or anxious, take a short break to collect yourself and clear your mind.',
  ];

  const moveRight = () => {
    if (scrollPosition + 1 <= maxPosition) {
      setScrollPosition(scrollPosition + 1);
    }
  };

  const moveLeft = () => {
    if (scrollPosition - 1 >= smallestPosition) {
      setScrollPosition(scrollPosition - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.tipsContainer}>
          <p className={styles.tipsHeader}>Some tips!</p>
          <p className={styles.tipsSubHeader}>
            Whether you're a first time hacker or a hacking veteran, here are
            some useful tips for everyone!
          </p>
        </div>

        <div className={styles.tipsContent}>
          <p className={styles.tipText}>Tip #{scrollPosition + 1}:</p>
          <p className={styles.tipText}>{tipsArray[scrollPosition]}</p>
        </div>

        <div className={styles.progressBarContainer}>
          <div onClick={moveLeft} className={styles.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <circle cx="17.5" cy="17.3259" r="17" fill="#005271" />
              <circle cx="17.5" cy="17.3259" r="17" fill="#005271" />
              <path
                d="M19.5 12.3259L14.5 16.6116L19.5 21.3259"
                stroke="#9EE7E5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Bar translatePosition={(scrollPosition / tipsArray.length) * 500} />
          <div onClick={moveRight} className={styles.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
            >
              <circle
                cx="17"
                cy="17"
                r="17"
                transform="matrix(-1 0 0 1 34.5 0.325867)"
                fill="#005271"
              />
              <path
                d="M15.5 12.3259L20.5 16.6116L15.5 21.3259"
                stroke="#9EE7E5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const Bar = (props: { translatePosition: number }) => {
  return (
    <div className={styles.bar}>
      <div
        className={styles.progress}
        style={{ transform: `translateX(${props.translatePosition}%)` }}
      ></div>
    </div>
  );
};
