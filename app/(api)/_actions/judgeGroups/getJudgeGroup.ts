'use server';

import {
  GetJudgeGroup,
  GetManyJudgeGroups,
} from '@datalib/judgeGroups/getJudgeGroup';

export async function getJudgeGroup(group_id: string) {
  const judgeGroupRes = await GetJudgeGroup(group_id);
  return judgeGroupRes.json();
}

export async function getManyJudgeGroups(query: object = {}) {
  const judgeGroupRes = await GetManyJudgeGroups(query);
  return judgeGroupRes.json();
}
