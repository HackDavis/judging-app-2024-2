// import Image from 'next/image';
import styles from './JudgeNotHere.module.scss';
export default function JudgeNotHere() {
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
        <div className="styles container_timer">
          <h1>Timer HERE</h1>
        </div>
      </div>
    </div>
  );
}
