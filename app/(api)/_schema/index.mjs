import Judge from './Judge.mjs';
import JudgeGroup from './JudgeGroup.mjs';
import JudgeGroupToTeam from './JudgeGroupToTeam.mjs';
import Submission from './Submission.mjs';
import Team from './Team.mjs';
import HelpTimer from './HelpTimer.mjs';

const schema = {
  judges: Judge,
  judgeGroups: JudgeGroup,
  teams: Team,
  submissions: Submission,
  judgeGroupToTeams: JudgeGroupToTeam,
  helpTimers: HelpTimer,
};

export default schema;
