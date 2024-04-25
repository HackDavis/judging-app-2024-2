import matchTeams from '@actions/logic/matchTeams';
import groupJudges from '@actions/logic/groupJudges';
import deleteManyJudgeGroups from '@actions/judgeGroups/deleteJudgeGroup';
import deleteManyJudgeGroupsToTeams from '@actions/judgeGroupsToTeams/deleteJudgeGroupToTeam';
import scoreTeams from '@actions/logic/scoreTeams';

export default function JudgeTeamGrouping() {
  return (
    <div>
      <button onClick={async () => await groupJudges()}>Group Judges</button>
      <button onClick={async () => await matchTeams()}>Match Teams</button>
      <button onClick={async () => await deleteManyJudgeGroups()}>
        Delete All Judge Groups
      </button>
      <button onClick={async () => await deleteManyJudgeGroupsToTeams()}>
        Delete All Links
      </button>
      <button onClick={async () => await scoreTeams()}>Score Teams</button>
    </div>
  );
}
