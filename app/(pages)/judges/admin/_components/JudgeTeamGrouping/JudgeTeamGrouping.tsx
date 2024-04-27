import matchTeams from '@actions/logic/matchTeams';
import groupJudges from '@actions/logic/groupJudges';
import deleteManyJudgeGroups from '@actions/judgeGroups/deleteJudgeGroup';
import deleteManyJudgeGroupsToTeams from '@actions/judgeGroupsToTeams/deleteJudgeGroupToTeam';
import scoreTeams from '@actions/logic/scoreTeams';
import { useFormState } from 'react-dom';

import styles from './JudgeTeamGrouping.module.scss';
import { useState } from 'react';

export default function JudgeTeamGrouping() {
  const [trackResults, scoreAction] = useFormState(scoreTeams, null);
  const [grouping, setGrouping] = useState('');
  const [matching, setMatching] = useState('');

  return (
    <div className={styles.body}>
      <button
        onClick={async () => setGrouping(JSON.stringify(await groupJudges()))}
      >
        Group Judges
      </button>
      <button
        onClick={async () => setMatching(JSON.stringify(await matchTeams()))}
      >
        Match Teams
      </button>
      <button
        onClick={async () => {
          await deleteManyJudgeGroups();
          setGrouping('groups deleted');
        }}
      >
        Delete All Judge Groups
      </button>
      <button onClick={async () => await deleteManyJudgeGroupsToTeams()}>
        Delete All Links
      </button>
      <form action={scoreAction}>
        <button type="submit">Score Teams</button>
        {trackResults !== null
          ? trackResults!.map((result) => (
              <>
                <h4>{result.track}</h4>
                {result.topEntries.map((entry) => (
                  <>
                    <p>{entry.team}</p>
                    <p>{entry.score}</p>
                  </>
                ))}
              </>
            ))
          : ''}
      </form>
      <p>groups: {grouping}</p>
      <p>matching: {matching}</p>
    </div>
  );
}
