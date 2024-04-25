'use server';

import { DeleteManyJudgeGroups } from '@datalib/judgeGroups/deleteJudgeGroup';
import parseAndReplace from '@utils/request/parseAndReplace';

export default async function deleteManyJudgeGroups(query: object = {}) {
  const newQuery = await parseAndReplace(query);
  await DeleteManyJudgeGroups(newQuery);
}
