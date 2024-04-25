'use server';

import { GetManyTeams, GetTeam } from '@datalib/teams/getTeam';
import parseAndReplace from '@utils/request/parseAndReplace';

export async function getTeam(id: string) {
  const teamRes = await GetTeam(id);
  return teamRes.json();
}

export async function getManyTeams(query: object = {}) {
  const newQuery = await parseAndReplace(query);
  const teamRes = await GetManyTeams(newQuery);
  return teamRes.json();
}
