'use client';
import { useState, useEffect } from 'react';
import { useFormState } from 'react-dom';

import styles from './ScoringForm.module.scss';

import TeamBlock from './ScoringSubComponents/TeamBlock';
import ScoringInput from './ScoringSubComponents/ScoreInput';
import Comments from './ScoringSubComponents/Comments';
import Submission from './ScoringSubComponents/Submission';

import updateSubmission from '@actions/submissions/updateSubmission';

import TeamInt from '@typeDefs/teams';
import SubmissionInt from '@typeDefs/submissions';
import { useRouter } from 'next/navigation';

const generalScoreNames = [
  'Social Good',
  'Technical Complexity',
  'Design',
  'Creativity',
  'Presentation',
];

export default function ScoringForm({
  team,
  submission,
}: {
  team: TeamInt;
  submission: SubmissionInt;
}) {
  const router = useRouter();
  const [updateState, UpdateSubmission] = useFormState(updateSubmission, {
    ok: false,
    body: null,
    error: null,
  });

  const [ready, setReady] = useState(5 + team.tracks.length);

  useEffect(() => {
    if (updateState.ok === true) {
      router.push('/judges');
    }
  }, [updateState, router]);

  return (
    <div className={styles.container}>
      <TeamBlock team={team} />
      <form action={UpdateSubmission}>
        <input
          name="judge_id"
          type="hidden"
          defaultValue={submission.judge_id}
        />
        <input name="team_id" type="hidden" defaultValue={team._id} />
        <ScoringInput
          inputNameHeader="Overall Scoring"
          inputScoreNames={generalScoreNames}
          setReady={setReady}
        />
        <ScoringInput
          inputNameHeader="Specific Tracks"
          inputScoreNames={team.tracks}
          setReady={setReady}
        />
        <div>
          <Comments submission={submission} />
          <Submission canSubmit={ready <= 0} error={updateState.error} />
        </div>
      </form>
    </div>
  );
}
