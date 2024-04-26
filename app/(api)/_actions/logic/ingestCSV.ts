'use server';

import { CreateManyTeams } from '@datalib/teams/createTeams';

export default async function ingestCSV(parsedData: []) {
  const res = await (await CreateManyTeams(parsedData)).json();
  return { ok: res.ok, error: res.error };
}
