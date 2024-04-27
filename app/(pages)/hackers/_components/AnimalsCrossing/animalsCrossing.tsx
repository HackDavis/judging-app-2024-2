'use client';
import styles from './animalsCrossing.module.scss';
import Image from 'next/image';
import Cow from '/public/hackers/crossing_cow.svg';
import Bunny from '/public/hackers/crossing_bunny.svg';
import Frog from '/public/hackers/crossing_frog.svg';
import Duck from '/public/hackers/crossing_duck.svg';
import arrowLt from '/public/hackers/callout_left.svg';
import arrowRt from '/public/hackers/callout_right.svg';

export default function AnimalsCrossing() {
  return (
    <div className={styles.section_container}>
      <div className={styles.callout1}>
        <p className={styles.callout_text}>Davis Creamery after?</p>
      </div>
      <Image src={arrowLt} alt="callout_arrow" className={styles.arrow_lt} />
      <div className={styles.callout2}>
        <p className={styles.callout_text}>Ooh! I'm down :3</p>
      </div>
      <Image src={arrowRt} alt="callout_arrow" className={styles.arrow_rt} />
      <div className={styles.animals}>
        <Image src={Cow} alt="Cow" className={styles.mascots} />
        <Image src={Bunny} alt="Bunny" className={styles.mascots} />
        <Image src={Frog} alt="Frog" className={styles.mascots} />
        <Image src={Duck} alt="Duck" className={styles.mascots} />
      </div>
      <div className={styles.crosswalk}>
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className={styles.xing} />
        ))}
      </div>
    </div>
  );
}
