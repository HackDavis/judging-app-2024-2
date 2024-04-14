// import styles from './ScoreInput.module.scss';
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
    <div>
      <h2>Overall Scoring </h2>
      {overallCategories.map((category, index) => (
        <ScoringCard categoryName={category} index={index + 1} key={index} />
      ))}
    </div>
  );
}
