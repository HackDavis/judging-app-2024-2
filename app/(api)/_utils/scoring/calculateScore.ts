import tracks from '../../_data/tracks.json' assert { type: 'json' };

export default function calculateScore(
  chosenTracks: string[],
  scores: number[],
  correlations: object[]
) {
  let finalScores: number[];

  const str: string = "hello"
  const x = chosenTracks[0];
  const y = x[str];

  finalScores = chosenTracks.map((chosenTrack: string) => (
    return tracks[chosenTrack].reduce()
  ));

  return finalScores;
}
