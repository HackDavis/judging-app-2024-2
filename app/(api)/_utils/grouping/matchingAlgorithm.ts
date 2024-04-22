import JudgeGroup from '@typeDefs/judgeGroups';
import Team from '@typeDefs/teams';
import tracks from '../../_data/tracks.json' assert { type: 'json' };

interface Match {
  judge_group_id: string;
  team_id: string;
}

function createMatches(
  judgeGroups: JudgeGroup[],
  teams: Team[],
  type: string,
  rounds: number
) {
  const matches: Match[] = [];

  judgeGroups.forEach((judgeGroup) => {
    let count = 0;
    for (const team of teams) {
      if (count == rounds) break;
      for (const chosenTrack in team.tracks) {
        if (judgeGroup._id == undefined) continue;
        const foundTrack = tracks.find((track) => track.name === chosenTrack);
        if (foundTrack == undefined) continue;

        if (foundTrack.type === type) {
          matches.push({
            judge_group_id: judgeGroup._id,
            team_id: team._id,
          });
          count++;
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
  const techGroups = judgeGroups.filter((group) => group.type === 'T');
  const generalGroups = judgeGroups.filter((group) => group.type === 'G');
  const designGroups = judgeGroups.filter((group) => group.type === 'D');

  let totalTech = 0;
  let totalGeneral = 0;
  let totalDesign = 0;

  teams.forEach((team) => {
    team.tracks.forEach((chosenTrack) => {
      const foundTrack = tracks.find((track) => track.name === chosenTrack);

      if (
        foundTrack == undefined ||
        foundTrack.name === 'Best Hack for Social Good'
      ) {
        return;
      }

      switch (foundTrack!.type) {
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

  const techMatches = createMatches(techGroups, teams, 'tech', techRounds);
  const generalMatches = createMatches(
    generalGroups,
    teams,
    'general',
    generalRounds
  );
  const designMatches = createMatches(
    designGroups,
    teams,
    'design',
    designRounds
  );

  return techMatches.concat(generalMatches, designMatches);
}
