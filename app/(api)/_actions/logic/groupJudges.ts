'use server';

import { getManyJudges } from '@actions/judges/getJudge';
import { CreateJudgeGroup } from '@datalib/judgeGroups/createJudgeGroup';
import groupingAlgorithm from '@utils/grouping/groupingAlgorithm';

export default async function groupJudges() {
  const judges = await getManyJudges();
  const groups = groupingAlgorithm(judges.body);
  groups.forEach((group) => CreateJudgeGroup(group));
}
