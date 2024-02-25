interface TeamInt {
  number: number;
  tracks: string[];
  name: string;
  tech_emphasis: number;
  design_emphasis: number;
  judge_pair_ids?: string[];
  submission_ids?: string[];
  _id: string;
}

export default TeamInt;
