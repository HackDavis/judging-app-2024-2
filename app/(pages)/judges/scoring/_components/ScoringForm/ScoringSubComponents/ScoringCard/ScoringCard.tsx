'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './ScoringCard.module.scss';

interface ScoringCardProps {
  categoryName: string;
  index: number;
  categoryScores: Map<string, number>;
  setCategoryScores: Dispatch<SetStateAction<Map<string, number>>>;
}
export default function ScoringCard({
  categoryName,
  index,
  categoryScores,
  setCategoryScores,
}: ScoringCardProps) {
  const scores = [1, 2, 3, 4, 5];

  const [pickedScore, setPickedScore] = useState(-1);

  const enterChoice = (index: number) => {
    return () => {
      setPickedScore(index);

      const updatedMap = new Map(categoryScores);
      updatedMap.set(categoryName, index + 1);
      setCategoryScores(updatedMap);
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
              index == pickedScore
                ? styles.scoringCircleFilled
                : styles.scoringCircle
            }
            onClick={enterChoice(index)}
          >
            {score}
          </div>
        ))}
      </div>
    </div>
  );
}
