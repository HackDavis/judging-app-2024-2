import Image from 'next/image';
import styles from './Welcome.module.scss';

export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2>Welcome to HackDavis,</h2>
          <h1>Hackers!</h1>
          <div className={styles.container_cow}>
            <Image
              src="/hackersPOV/judge_cow.svg"
              alt="judge_cow"
              width={230}
              height={203}
              style={{ zIndex: 0 }}
              priority
            />
            <Image
              src="/hackersPOV/judge_wig.svg"
              alt="judge_wig"
              width={187}
              height={96}
              style={{ position: 'absolute', left: 21, top: 7, zIndex: 1 }}
            />
            <Image
              src="/hackersPOV/judge_gavel.svg"
              alt="judge_gavel"
              width={103}
              height={103}
              style={{ position: 'absolute', left: 190, top: 30, zIndex: 2 }}
            />
            <Image
              src="/hackersPOV/judge_sparkles.svg"
              alt="judge_sparkles"
              width={59}
              height={60}
              style={{ position: 'absolute', left: 280, top: 30, zIndex: 3 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
