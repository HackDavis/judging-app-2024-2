'use server';

import { DeleteManyJudgeGroupsToTeams } from '@datalib/judgeGroups/deleteJudgeGroupToTeam';
import parseAndReplace from '@utils/request/parseAndReplace';

export default async function deleteManyJudgeGroupsToTeams(query: object = {}) {
  const newQuery = await parseAndReplace(query);
  await DeleteManyJudgeGroupsToTeams(newQuery);
}
