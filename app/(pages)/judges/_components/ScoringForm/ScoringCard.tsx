import styles from './ScoringCard.module.scss';
interface ScoringCardProps {
  categoryName: string;
  index: number;
}
export default function ScoringCard({ categoryName, index }: ScoringCardProps) {
  const scores = [1, 2, 3, 4, 5];

  return (
    <div className={styles.scoringCard}>
      <h2 className={styles.categoryName}>{`${index}. ${categoryName}`}</h2>
      <div className={styles.scoringCircleContainer}>
        {scores.map((score, index) => (
          <div key={index} className={styles.scoringCircle}>
            {score}
          </div>
        ))}
      </div>
    </div>
  );
}
