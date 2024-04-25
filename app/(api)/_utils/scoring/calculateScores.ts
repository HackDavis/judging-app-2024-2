import Team from '@typeDefs/teams';
import Submission from '@typeDefs/submissions';
import tracks from '../../_data/tracks.json' assert { type: 'json' };

interface Correlation {
  track: string;
  score: number;
}

function calculateTrackScore(
  chosenTracks: string[],
  scores: number[],
  correlations: Correlation[]
) {
  const finalScores = chosenTracks.map((chosenTrack) => {
    const weights = tracks.find((track) => track.name == chosenTrack)?.weights;
    if (weights === undefined) return -1;
    const score = weights.reduce((sum, weight, i) => {
      return sum + weight * scores[i];
    }, 0);
    const correlationWeight = correlations.find(
      (correlation) => correlation.track == chosenTrack
    )?.score;

    if (correlationWeight === undefined || score === undefined) {
      return -1;
    }

    return ((score! * correlationWeight!) / 5).toFixed(2);
  });

  return finalScores;
}

export default function calculateScores(team: Team, submissions: Submission[]) {
  for (const submission of submissions) {
    calculateTrackScore(
      team.tracks,
      submission.scores,
      submission.correlations as Correlation[]
    );
  }
}
