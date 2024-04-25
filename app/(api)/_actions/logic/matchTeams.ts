'use server';

import { LinkManyJudgeGroupsToTeams } from '@datalib/judgeGroups/linkJudgeGroupToTeam';
import matchingAlgorithm from '@utils/grouping/matchingAlgorithm';
import JudgeGroupToTeam from '@typeDefs/judgeGroupToTeam';
import parseAndReplace from '@utils/request/parseAndReplace';
import { getManyJudgeGroups } from '@actions/judgeGroups/getJudgeGroup';
import { getManyTeams } from '@actions/teams/getTeams';

function checkMatches(matches: JudgeGroupToTeam[], teamsLength: number) {
  if (matches.length < 2 * teamsLength) return false;

  let valid = true;
  const mp: Map<string, number> = new Map();
  for (const match of matches) {
    if (mp.get(match.team_id.toString()) === undefined) {
      mp.set(match.team_id.toString(), 1);
    } else {
      mp.set(match.team_id.toString(), mp.get(match.team_id.toString())! + 1);
    }
  }

  mp.forEach((count) => {
    if (count !== 2) valid = false;
  });

  return valid;
}

export default async function matchTeams() {
  const judgeGroups = (await getManyJudgeGroups()).body;
  const teams = (await getManyTeams()).body;

  let matches = matchingAlgorithm(
    judgeGroups,
    JSON.parse(JSON.stringify(teams))
  );
  let parsedMatches = await parseAndReplace(matches);
  let valid = checkMatches(parsedMatches, teams.length);

  while (!valid) {
    matches = matchingAlgorithm(judgeGroups, JSON.parse(JSON.stringify(teams)));
    parsedMatches = await parseAndReplace(matches);
    valid = checkMatches(parsedMatches, teams.length);
  }

  LinkManyJudgeGroupsToTeams(matches);
}
