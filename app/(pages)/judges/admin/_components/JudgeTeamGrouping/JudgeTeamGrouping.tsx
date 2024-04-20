import matchTeams from '@actions/logic/matchTeams';
import groupJudges from '@actions/logic/groupJudges';

export default function JudgeTeamGrouping() {
  return (
    <div>
      <button onClick={async () => await groupJudges()}>Group Judges</button>
      <button onClick={async () => await matchTeams()}>Match Teams</button>
    </div>
  );
}
