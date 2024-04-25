'use server';

import { getManySubmissions } from '@actions/submissions/getSubmission';
import { getManyTeams } from '@actions/teams/getTeams';
import Team from '@typeDefs/teams';
import calculateScores from '@utils/scoring/calculateScores';

export default async function scoreTeams() {
  const teams: Team[] = (await getManyTeams()).body;
  for (const team of teams) {
    const submissions = (
      await getManySubmissions({
        team_id: {
          '*convertId': {
            id: team._id,
          },
        },
      })
    ).body;
    calculateScores(team, submissions);
  }
}
