import styles from './ScoreInput.module.scss';
import ScoringCard from './ScoringCard';

export default function ScoringInput() {
  const overallCategories = [
    'Social Good',
    'Technical Complexity',
    'Design',
    'Creativity',
    'Presentation',
  ];

  return (
    <div className={styles.inputContainer}>
      <h2 className={styles.scoringTitle}>Overall Scoring </h2>
      {overallCategories.map((category, index) => (
        <ScoringCard categoryName={category} index={index + 1} key={index} />
      ))}
    </div>
  );
}
