'use server';

import calculateScores from '@utils/scoring/calculateScores';

export default async function scoreTeams() {
  calculateScores();
}
