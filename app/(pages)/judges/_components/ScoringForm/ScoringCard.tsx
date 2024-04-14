import styles from './ScoringCard.module.scss';
interface ScoringCardProps {
  categoryName: string;
  index: number;
}
export default function ScoringCard({ categoryName, index }: ScoringCardProps) {
  return (
    <div className={styles.scoringCard}>
      <h2>{`${index}. ${categoryName}`}</h2>
      <div className={styles.scoringCircleContainer}>
        <div className={styles.scoringCircle}>1</div>
        <div className={styles.scoringCircle}>2</div>
        <div className={styles.scoringCircle}>3</div>
        <div className={styles.scoringCircle}>4</div>
        <div className={styles.scoringCircle}>5</div>
      </div>
    </div>
  );
}
