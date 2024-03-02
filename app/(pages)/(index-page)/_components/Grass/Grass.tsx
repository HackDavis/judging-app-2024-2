import Image from 'next/image';
import styles from './Grass.module.scss';
import Polaroids from '../Polaroids/Polaroids';
import Foreground from '../Foreground/Foreground';

export default function Grass() {
  return (
    <div className={styles.container}>
      <div className={styles.grass}>
        <div className={styles.grass_far}>
          <Image
            src="/index/Hero/hero_far-grass.png"
            alt="far_grass"
            width={4000}
            height={100}
            className={styles.grasses_image}
            z-index={2}
            priority={true}
            placeholder="blur"
            blurDataURL="/index/Hero/hero_far-grass.png"
          />
        </div>
        <div className={styles.grass_medium}>
          <Image
            src="/index/Hero/hero_mid-grass.png"
            alt="mid_grass"
            width={4000}
            height={100}
            className={styles.grasses_image}
            z-index={3}
            priority={true}
            placeholder="blur"
            blurDataURL="/index/Hero/hero_mid-grass.png"
          />
        </div>
      </div>
      <div className={styles.foreground}>
        <Foreground />
      </div>
      <div className={styles.polaroids}>
        <Polaroids />
      </div>
    </div>
  );
}