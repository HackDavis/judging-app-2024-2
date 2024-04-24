import JudgeGroup from '@typeDefs/judgeGroups';
import Team from '@typeDefs/teams';
import tracks from '../../_data/tracks.json' assert { type: 'json' };

interface Match {
  judge_group_id: object;
  team_id: object;
  round: number;
}

function createMatches(
  judgeGroups: JudgeGroup[],
  teams: Team[],
  type: string,
  rounds: number
) {
  const matches: Match[] = [];

  judgeGroups.forEach((judgeGroup) => {
    if (judgeGroup._id === undefined) return;
    let count = 1;
    for (const team of teams) {
      if (team._id === undefined) continue;
      if (count === rounds + 1) break;
      for (const chosenTrack of team.tracks) {
        const foundTrack = tracks.find((track) => track.name === chosenTrack);
        if (foundTrack === undefined) continue;

        if (foundTrack.type === type) {
          const idx = team.tracks.indexOf(chosenTrack);
          if (idx !== -1) team.tracks.splice(idx, 1);

          matches.push({
            judge_group_id: {
              '*convertId': {
                id: judgeGroup._id,
              },
            },
            team_id: {
              '*convertId': {
                id: team._id,
              },
            },
            round: count,
          });
          count++;
          break;
        }
      }
    }
  });

  return matches;
}

export default function matchingAlgorithm(
  judgeGroups: JudgeGroup[],
  teams: Team[]
) {
  const filteredTeams = teams.map((team) => {
    team.tracks.splice(2);
    while (team.tracks.length < 2) team.tracks.push('No Track');
    return team;
  });

  const techGroups = judgeGroups.filter((group) => group.type === 'tech');
  const generalGroups = judgeGroups.filter((group) => group.type === 'general');
  const designGroups = judgeGroups.filter((group) => group.type === 'design');

  let totalTech = 0;
  let totalGeneral = 0;
  let totalDesign = 0;

  filteredTeams.forEach((team) => {
    team.tracks.forEach((chosenTrack) => {
      const foundTrack = tracks.find((track) => track.name === chosenTrack);
      if (foundTrack === undefined) {
        console.log('Warning: Undefined track found.');
        return;
      }

      switch (foundTrack.type) {
        case 'tech':
          totalTech++;
          break;
        case 'general':
          totalGeneral++;
          break;
        case 'design':
          totalDesign++;
          break;
        default:
          return;
      }
    });
  });

  const techRounds = Math.ceil(totalTech / techGroups.length);
  const generalRounds = Math.ceil(totalGeneral / generalGroups.length);
  const designRounds = Math.ceil(totalDesign / designGroups.length);

  const techMatches = createMatches(
    techGroups,
    filteredTeams,
    'tech',
    techRounds
  );
  const generalMatches = createMatches(
    generalGroups,
    filteredTeams,
    'general',
    generalRounds
  );
  const designMatches = createMatches(
    designGroups,
    filteredTeams,
    'design',
    designRounds
  );

  return techMatches.concat(generalMatches, designMatches);
}
