'use server';

import { CreateManyTeams } from '@datalib/teams/createTeams';
import csvAlgorithm from '@utils/csv-ingestion/csvAlgorithm';

export default async function ingestCSV() {
  const parsedData = await (await csvAlgorithm()).json();
  await CreateManyTeams(parsedData.body);
}
