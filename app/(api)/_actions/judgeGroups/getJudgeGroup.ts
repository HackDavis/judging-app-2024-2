'use server';

import { GetManyJudgeGroups } from '@datalib/judgeGroups/getJudgeGroup';

export async function getManyJudgeGroups(query: object = {}) {
  const judgeGroupRes = await GetManyJudgeGroups(query);
  return judgeGroupRes.json();
}
