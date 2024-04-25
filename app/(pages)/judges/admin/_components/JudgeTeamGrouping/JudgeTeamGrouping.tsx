import matchTeams from '@actions/logic/matchTeams';
import groupJudges from '@actions/logic/groupJudges';
import deleteAllJudgeGroups from '@actions/auth/judgeGroups/deleteAllJudgeGroups';

export default function JudgeTeamGrouping() {
  return (
    <div>
      <button onClick={async () => await groupJudges()}>Group Judges</button>
      <button onClick={async () => await matchTeams()}>Match Teams</button>
      <button onClick={async () => await deleteAllJudgeGroups()}>
        Delete Judge Groups
      </button>
    </div>
  );
}
