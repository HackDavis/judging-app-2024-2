import JudgeInt from '@typeDefs/judges';
import LogoutButton from '../LogoutButton/LogoutButton';
import styles from './HubHero.module.scss';

import Image from 'next/image';

const Thing1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="242"
    height="254"
    viewBox="0 0 242 254"
    fill="none"
    className={styles.thing_1_image}
  >
    <path
      opacity="0.2"
      d="M94.3046 117.112C75.1245 99.4663 63.4846 74.3346 59.2546 44.0785C57.4646 31.3074 56.7845 18.126 51.8145 6.28579C46.8445 -5.56446 36.2445 -16.0635 23.7145 -16.0135C8.33455 -15.9434 -2.95545 -0.480063 -7.06545 14.7831C-15.7055 46.8809 -14.5955 84.2132 9.25455 109.695C27.8245 129.542 55.8546 139.221 72.3146 160.839C88.2546 181.768 91.1545 211.203 109.685 229.879C119.445 239.718 132.635 245.483 146.015 249.096C164.965 254.2 185.555 255.281 203.925 248.395C222.305 241.509 237.965 225.655 241.185 206.279C249.625 155.485 184.735 148.779 150.615 143.224C127.535 139.461 108.775 130.413 94.3046 117.112Z"
      fill="#69779B"
    />
  </svg>
);
const Thing2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="192"
    height="91"
    viewBox="0 0 192 91"
    fill="none"
    className={styles.thing_2_image}
  >
    <path
      opacity="0.15"
      d="M174.458 23.8819C157.629 22.1276 144.785 7.61813 137.942 -6.60457C131.1 -20.8273 127.653 -36.3232 117.646 -49.1895C96.3817 -76.5021 48.7758 -81.2759 22.9232 -61.6358C-2.93289 -41.9864 -6.40626 -4.36767 10.2749 25.1081C26.9451 54.58 60.4343 75.7138 95.5059 84.9158C126.322 93.0047 159.542 92.619 186.77 81.1067C213.999 69.5944 268.98 42.6439 272.293 15.2473C274.234 -0.801009 262.821 -26.7544 247.405 -10.8431C235.445 1.52961 200.644 26.6144 174.458 23.8819Z"
      fill="#ACDBDF"
      fillOpacity="0.5"
    />
  </svg>
);

const Thing3 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="69"
    height="76"
    viewBox="0 0 69 76"
    fill="none"
    className={styles.thing_3_image}
  >
    <g opacity="0.2">
      <path
        opacity="0.65"
        d="M90.2209 33.991C92.9093 54.7321 74.9507 73.3631 50.1097 75.6078C25.2687 77.8525 2.95489 62.8579 0.266468 42.1168C-2.42195 21.3758 15.5367 2.74478 40.3777 0.500076C65.2186 -1.74462 87.5324 13.25 90.2209 33.991Z"
        fill="#69779B"
      />
    </g>
  </svg>
);
export default function HubHero({
  user,
  loading,
}: {
  user: JudgeInt;
  loading: boolean;
}) {
  if (loading) {
    return 'loading...';
  }
  return (
    <div className={styles.container}>
      <LogoutButton />
      {Thing1}
      {Thing2}
      {Thing3}

      <div className={styles.welcome_text}>
        <p>Welcome to HackDavis,</p>
        <div className={styles.name_container}>
          <h1>{user.email}</h1>
        </div>
      </div>
      <div className={styles.gavel_cow}>
        <div className={styles.cow_container}>
          <Image
            src="/judges/hub/judge-cow.png"
            alt=""
            height={1600}
            width={1600}
            quality={100}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.blurb}>
          <p className={styles.intro_text}>You're paired with...</p>
          <p className={styles.name}>{user.email}</p>
        </div>
      </div>
    </div>
  );
}
