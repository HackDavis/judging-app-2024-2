'use server';

import {
  GetManySubmissions,
  GetSubmission,
} from '@datalib/submissions/getSubmissions';
import parseAndReplace from '@utils/request/parseAndReplace';

export async function getSubmission(judge_id: string, team_id: string) {
  const submissionRes = await GetSubmission(judge_id, team_id);
  return submissionRes.json();
}

export async function getManySubmissions(query: object = {}) {
  const newQuery = await parseAndReplace(query);
  const submissionRes = await GetManySubmissions(newQuery);
  return submissionRes.json();
}
