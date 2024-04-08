interface JudgeInt {
  _id?: string;
  name: string;
  email: string;
  password: string;
  specialty: string;
  role: string;
  judge_pair_id?: string;
  submission_ids?: string[];
}

export default JudgeInt;
