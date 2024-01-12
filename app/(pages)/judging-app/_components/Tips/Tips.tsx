'use client';
import { useState } from 'react';
import styles from './Tips.module.scss';

export default function Tips() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxPosition = 4;
  const smallestPosition = 0;

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
    <div id={styles.tipSection}>
      <div id={styles.tipsExplained}>
        <p id={styles.tipsHeader}>Some tips!</p>
        <p id={styles.tipsSubHeader}>
          Whether you're a first time hacker or a hacking veteran, here are some
          useful tips for everyone!
        </p>
      </div>

      <div id={styles.tips}>
        <p className={styles.tipText}>Tip #1:</p>
        <p className={styles.tipText}>
          Take a deep breath. It'll help you both organize your thoughts and
          your presentation better!
        </p>
      </div>

      <div id={styles.scrollBar}>
        <div onClick={moveLeft}>
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
        <Bar translatePosition={scrollPosition * 45} />
        <div onClick={moveRight}>
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
  );
}

const Bar = (props: { translatePosition: number }) => {
  return (
    <div id={styles.bar}>
      <div
        id={styles.progress}
        style={{ transform: `translateX(${props.translatePosition}px)` }}
      ></div>
    </div>
  );
};

const LeftArrow = (props: { moveLeft: any }) => {
  return (
    <div onClick={props.moveLeft}>
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
  );
};
const RightArrow = () => {
  return (
    <div>
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
  );
};
