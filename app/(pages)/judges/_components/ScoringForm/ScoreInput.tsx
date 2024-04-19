import { Dispatch, SetStateAction } from 'react';
import styles from './ScoreInput.module.scss';
import ScoringCard from './ScoringCard';

interface ScoringInputProps {
  inputNameHeader: string;
  inputScoreNames: string[];
  categoryScores: Map<string, number>;
  setCategoryScores: Dispatch<SetStateAction<Map<string, number>>>;
}

export default function ScoringInput({
  inputNameHeader,
  inputScoreNames,
  categoryScores,
  setCategoryScores,
}: ScoringInputProps) {
  return (
    <div className={styles.inputContainer}>
      <h2 className={styles.scoringTitle}>{inputNameHeader} </h2>
      {inputScoreNames.map((category, index) => (
        <ScoringCard
          categoryName={category}
          index={index + 1}
          key={index}
          categoryScores={categoryScores}
          setCategoryScores={setCategoryScores}
        />
      ))}
    </div>
  );
}
