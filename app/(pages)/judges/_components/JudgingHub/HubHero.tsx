import JudgeInt from '@typeDefs/judges';
import LogoutButton from '../LogoutButton/LogoutButton';
import styles from './HubHero.module.scss';

import Image from 'next/image';

import judgeCow from '/public/judges/hub/judge-cow.svg';
import judgeWig from '/public/judges/hub/judge-wig.svg';
import bg_topleft from '/public/judges/hub/topleft.svg';
import bg_top from '/public/judges/hub/topright.svg';
import bg_bottom from '/public/judges/hub/bottom.svg';

export default function HubHero({
  user,
  loading,
  members,
}: {
  user: JudgeInt;
  loading: boolean;
  members: string[];
}) {
  if (loading) {
    return 'loading...';
  }
  return (
    <div className={styles.container}>
      <LogoutButton>LOGOUT BUTTON YOU CAN'T MISS THIS</LogoutButton>
      <div className={styles.welcome_text}>
        <p>Welcome to HackDavis,</p>
        <div className={styles.name_container}>
          <h1>{user.name}</h1>
        </div>
      </div>
      <div className={styles.gavel_cow}>
        <div className={styles.cow_container}>
          <Image src={judgeCow} alt="Judge Cow" className={styles.cow} />
          <Image src={judgeWig} alt="Judge Wig" className={styles.wig} />
        </div>
        <div className={styles.blurb}>
          <p className={styles.intro_text}>You're paired with...</p>
          {members.map((member: string, index: number) => (
            <p key={index} className={styles.name}>
              {member}
            </p>
          ))}
        </div>
      </div>
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
    </div>
  );
}
