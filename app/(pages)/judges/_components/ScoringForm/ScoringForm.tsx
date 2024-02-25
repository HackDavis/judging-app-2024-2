'use client';
import styles from './ScoringForm.module.scss';

export default function ScoringForm() {
  return (
    <div className={styles.container}>
      <div className={styles.teamBlock}>
        <div className={styles.topText}>
          <h2 className={styles.teamTable}>Table 117</h2>

          <div className={styles.mapContent}>
            <h3 className={styles.mapText}>Find on Map</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
            >
              <path
                d="M9.70454 8.78954C9.79816 8.88245 9.87247 8.99299 9.92318 9.11478C9.97389 9.23657 10 9.36721 10 9.49915C10 9.63109 9.97389 9.76172 9.92318 9.88351C9.87247 10.0053 9.79816 10.1158 9.70454 10.2088L1.71381 18.2044C1.62096 18.298 1.51048 18.3724 1.38876 18.4231C1.26705 18.4739 1.13649 18.5 1.00463 18.5C0.872774 18.5 0.74222 18.4739 0.620502 18.4231C0.498784 18.3724 0.388311 18.298 0.295456 18.2044C0.201836 18.1115 0.127528 18.0009 0.0768181 17.8791C0.0261082 17.7573 0 17.6267 0 17.4948C0 17.3628 0.0261082 17.2322 0.0768181 17.1104C0.127528 16.9886 0.201836 16.8781 0.295456 16.7851L7.587 9.49915L0.295456 2.21315C0.10737 2.02495 0.00170462 1.7697 0.00170462 1.50354C0.00170463 1.23738 0.10737 0.98213 0.295456 0.79393C0.483541 0.60573 0.73864 0.5 1.00463 0.5C1.27063 0.5 1.52573 0.60573 1.71381 0.79393L9.70454 8.78954Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <h1 className={styles.teamName}>Haptic Hand</h1>
        <div className={styles.guideContent}>
          <p className={styles.guideText}>
            Please refer back to our judging guide for each track. Tracks are on
            a scale from 1-10.
          </p>
          <div>Judging guide div / link</div>
        </div>
      </div>
    </div>
  );
}
