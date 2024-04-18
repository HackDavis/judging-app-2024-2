import styles from './ScoreInput.module.scss';
import ScoringCard from './ScoringCard';

interface ScoringInputProps {
  inputNameHeader: string;
  inputScoreNames: string[];
}

export default function ScoringInput({
  inputNameHeader,
  inputScoreNames,
}: ScoringInputProps) {
  return (
    <div className={styles.inputContainer}>
      <h2 className={styles.scoringTitle}>{inputNameHeader} </h2>
      {inputScoreNames.map((category, index) => (
        <ScoringCard categoryName={category} index={index + 1} key={index} />
      ))}
    </div>
  );
}
