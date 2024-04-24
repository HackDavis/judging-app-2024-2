'use server';

import { CreateJudgeGroup } from '@datalib/judgeGroups/createJudgeGroup';
import { GetManyJudges } from '@datalib/judges/getJudge';
import groupingAlgorithm from '@utils/grouping/groupingAlgorithm';

export default async function groupJudges() {
  const judges = await (await GetManyJudges()).json();
  const groups = groupingAlgorithm(judges.body);
  groups.forEach((group) => CreateJudgeGroup(group));
}
