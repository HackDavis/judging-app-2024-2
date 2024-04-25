import Image from 'next/image';
import styles from './Welcome.module.scss';

import judge_cow from '/public/hackers/judge_cow.svg';
import judge_wig from '/public/hackers/judge_wig.svg';
import judge_gavel from '/public/hackers/judge_gavel.svg';
import judge_sparkles from '/public/hackers/judge_sparkles.svg';
import bg_bottom from '/public/hackers/bg_bottom.svg';
import bg_top from '/public/hackers/bg_top.svg';
import bg_topleft from '/public/hackers/bg_topleft.svg';

export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <Image
          src={bg_bottom}
          alt="bottom blurb"
          className={styles.bottom_blurb}
        />
        <Image src={bg_top} alt="top blurb" className={styles.top_blurb} />
        <Image
          src={bg_topleft}
          alt="top left blurb"
          className={styles.top_left_blurb}
        />
        <div className={styles.container_title}>
          <h2>Welcome to HackDavis,</h2>
          <h1>Hackers!</h1>
          <div className={styles.container_cow}>
            <Image
              src={judge_cow}
              alt="judge_cow"
              width={230}
              priority
              style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                zIndex: 0,
              }}
            />
            <Image
              src={judge_wig}
              alt="judge_wig"
              width={187}
              height={96}
              style={{ position: 'absolute', left: 21, top: 7, zIndex: 1 }}
            />
            <Image
              src={judge_gavel}
              alt="judge_gavel"
              width={103}
              height={103}
              style={{ position: 'absolute', left: 190, top: 30, zIndex: 2 }}
            />
            <Image
              src={judge_sparkles}
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
