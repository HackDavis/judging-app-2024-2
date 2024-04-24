'use server';
import { GetManyJudgeGroups } from '@datalib/judgeGroups/getJudgeGroup';
import { GetManyTeams } from '@datalib/teams/getTeam';
import { LinkManyJudgeGroupsToTeams } from '@datalib/judgeGroups/linkJudgeGroupToTeam';
import matchingAlgorithm from '@utils/grouping/matchingAlgorithm';

export default async function matchTeams() {
  const judgeGroups = await (await GetManyJudgeGroups()).json();
  const teams = await (await GetManyTeams()).json();
  const matches = matchingAlgorithm(judgeGroups.body, teams.body);
  LinkManyJudgeGroupsToTeams(matches);
}
