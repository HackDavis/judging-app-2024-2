import { LinkJudgeGroupToTeam } from '@datalib/judgeGroups/linkJudgeGroupToTeam';
import JudgeGroup from '@typeDefs/judgeGroups';
import Team from '@typeDefs/teams';
import tracks from '../../_data/tracks.json' assert { type: 'json' };

export default function matchTeams(judgeGroups: JudgeGroup[], teams: Team[]) {
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
}
