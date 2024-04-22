import Judge from './Judge.mjs';
import JudgeGroup from './JudgeGroup.mjs';
import JudgeGroupToTeam from './JudgeGroupToTeam.mjs';
import Submission from './Submission.mjs';
import Team from './Team.mjs';

const schema = {
  judges: Judge,
  judgeGroups: JudgeGroup,
  teams: Team,
  submissions: Submission,
  judgeGroupToTeams: JudgeGroupToTeam,
};

export default schema;
