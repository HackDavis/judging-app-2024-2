'use client';
import { useState } from 'react';
import styles from './ScoringForm.module.scss';
import TeamBlock from './TeamBlock';
import ScoringInput from './ScoreInput';
import Comments from './Comments';

export default function ScoringForm() {
  const generalScoreNames = [
    'Social Good',
    'Technical Complexity',
    'Design',
    'Creativity',
    'Presentation',
  ];

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
