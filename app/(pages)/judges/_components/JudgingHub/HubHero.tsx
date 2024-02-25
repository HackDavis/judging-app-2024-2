import JudgeInt from '@typeDefs/judges';
import LogoutButton from '../LogoutButton/LogoutButton';
import styles from './HubHero.module.scss';

import Image from 'next/image';

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
