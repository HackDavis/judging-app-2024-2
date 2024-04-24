'use server';

import { CreateManyTeams } from '@datalib/teams/createTeams';
import csvAlgorithm from '@utils/csv-ingestion/csvAlgorithm';

export default async function ingestCSV() {
  const parsedData = await (await csvAlgorithm()).json();

  const res = await (await CreateManyTeams(parsedData.body)).json();
  return { ok: res.ok, error: res.error };
}
