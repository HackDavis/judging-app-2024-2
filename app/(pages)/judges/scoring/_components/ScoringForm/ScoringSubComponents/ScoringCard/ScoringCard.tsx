'use client';
import { useState } from 'react';
import styles from './ScoringCard.module.scss';

interface ScoringCardProps {
  categoryName: string;
  index: number;
  setReady: (prev: any) => void;
}
export default function ScoringCard({
  categoryName,
  index,
  setReady,
}: ScoringCardProps) {
  const scores = [1, 2, 3, 4, 5];

  const [pickedScore, setPickedScore] = useState(-1);

  const enterChoice = (index: number) => {
    return () => {
      if (pickedScore === -1) {
        setReady((prev: any) => {
          return prev - 1;
        });
      }
      setPickedScore(index);
    };
  };
  return (
    <div className={styles.scoringCard}>
      <h2 className={styles.categoryName}>{`${index}. ${categoryName}`}</h2>
      <div className={styles.scoringCircleContainer}>
        {scores.map((score, index) => (
          <div
            key={index}
            className={
              index + 1 == pickedScore
                ? styles.scoringCircleFilled
                : styles.scoringCircle
            }
            onClick={enterChoice(score)}
          >
            {score}
          </div>
        ))}
      </div>
      <input name={categoryName} type="hidden" value={pickedScore} />
    </div>
  );
}
