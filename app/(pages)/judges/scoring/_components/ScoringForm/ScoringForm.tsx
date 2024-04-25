'use client';
import { useState } from 'react';
import styles from './ScoringForm.module.scss';
import TeamBlock from './ScoringSubComponents/TeamBlock';
import ScoringInput from './ScoringSubComponents/ScoreInput';
import Comments from './ScoringSubComponents/Comments';

export default function ScoringForm({
  team_id,
  judge_id,
}: {
  team_id: string;
  judge_id: string;
}) {
  const generalScoreNames = [
    'Social Good',
    'Technical Complexity',
    'Design',
    'Creativity',
    'Presentation',
  ];

  /* retrieve these from backend */
  const trackScoreNames = [
    'Best Social Hack',
    'Best Beginner Hack',
    'Best Design Hack',
    'Best Usage of MongoDB',
  ];

  // prefils the map with all the categories and sets the scores to -1 to
  // assist in error handling

  const initialCategoryScores = new Map();
  [...generalScoreNames, ...trackScoreNames].forEach((category) => {
    initialCategoryScores.set(category, -1);
  });

  const [categoryScores, setCategoryScores] = useState(initialCategoryScores);

  return (
    <div className={styles.container}>
      <TeamBlock />
      <ScoringInput
        inputNameHeader="Overall Scoring"
        inputScoreNames={generalScoreNames}
        categoryScores={categoryScores}
        setCategoryScores={setCategoryScores}
      />
      <ScoringInput
        inputNameHeader="Specific Tracks"
        inputScoreNames={trackScoreNames}
        categoryScores={categoryScores}
        setCategoryScores={setCategoryScores}
      />
      <Comments categoryScores={categoryScores} />
    </div>
  );
}
