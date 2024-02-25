import Judge from './Judge.mjs';
import JudgePair from './JudgePair.mjs';
import Submission from './Submission.mjs';
import Team from './Team.mjs';

const schema = {
  judges: Judge,
  judgePairs: JudgePair,
  submissions: Submission,
  teams: Team,
};

export default schema;
