import tracks from '../../_data/tracks.json' assert { type: 'json' };

interface Correlation {
  track: string;
  score: number;
}

export default function calculateScore(
  chosenTracks: string[],
  scores: number[],
  correlations: Correlation[]
) {
  const finalScores = chosenTracks.map((chosenTrack) => {
    const weights = tracks.find((track) => track.name == chosenTrack);
    const score = weights?.weights.reduce((sum, weight, i) => {
      return sum + weight * scores[i];
    }, 0);
    const correlationWeight = correlations.find(
      (correlation) => correlation.track == chosenTrack
    )?.score;

    if (correlationWeight == undefined || score == undefined) {
      return -1;
    }

    return ((score! * correlationWeight!) / 5).toFixed(2);
  });

  return finalScores;
}
