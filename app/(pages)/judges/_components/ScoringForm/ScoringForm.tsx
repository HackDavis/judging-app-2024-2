'use client';
import styles from './ScoringForm.module.scss';
import TeamBlock from './TeamBlock';
import ScoringInput from './ScoreInput';

export default function ScoringForm() {
  return (
    <div className={styles.container}>
      <TeamBlock />
      <ScoringInput />
    </div>
  );
}
