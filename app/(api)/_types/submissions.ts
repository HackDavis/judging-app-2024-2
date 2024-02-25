interface SubmissionInt {
  type: string;
  judge_id: string;
  team_id: string;
  scores: object;
  correlations: object;
  comments?: string;
  _id: string;
}

export default SubmissionInt;
