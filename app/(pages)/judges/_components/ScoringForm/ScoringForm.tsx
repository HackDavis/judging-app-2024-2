'use client';
import { useState } from 'react';
import styles from './ScoringForm.module.scss';
import TeamBlock from './TeamBlock';
import ScoringInput from './ScoreInput';
import Comments from './Comments';

export default function ScoringForm() {
  const [categoryScores, setCategoryScores] = useState<Map<string, number>>(
    new Map()
  );

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
