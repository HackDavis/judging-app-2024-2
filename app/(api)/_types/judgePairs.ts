interface JudgePairInt {
  type: string; //enumerate TT, TN, D?
  judges: string[];
  teams: string[];
  id?: string;
}

export default JudgePairInt;
