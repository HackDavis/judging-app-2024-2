import JudgeInt from '@typeDefs/judges';
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

  const speechBubbleTail = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.0712 8.81143C5.90657 7.95843 5.82036 7.07751 5.82036 6.17644V-0.0078125H19.644V20.0001C16.2965 20.0001 13.2268 18.8102 10.835 16.8303C8.44879 18.4199 4.62262 19.9309 0 19.0904C1.27323 18.5448 6.18426 15.2707 6.00237 8.7227C6.02438 8.75296 6.04733 8.78253 6.0712 8.81143Z"
        fill="white"
      />
    </svg>
  );

  return (
    <div className={styles.container}>
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
          <div className={styles.bubble_tail}>{speechBubbleTail}</div>
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
        priority
      />
    </div>
  );
}
