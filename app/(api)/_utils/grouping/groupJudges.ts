import Judge from '@typeDefs/judges';

export default function groupJudges(judges: Judge[]) {
  const techJudges = judges.filter((judge) => judge.specialty === 'tech');
  const nonTechJudges = judges.filter((judge) => judge.specialty === 'nontech');
  const desJudges = judges.filter((judge) => judge.specialty === 'design');

  const groups: { type: string; judge_ids: object }[] = [];

  nonTechJudges.forEach((ntJudge) => {
    if (techJudges.length > 0) {
      const tJudge = techJudges.shift();
      groups.push({
        type: 'TN',
        judge_ids: {
          '*convertIds': {
            ids: [
              ntJudge._id ? ntJudge._id : '',
              tJudge?._id ? tJudge._id : '',
            ],
          },
        },
      });
    }
  });

  // pairing remaining tech judges
  while (techJudges.length > 3) {
    const tJudge1 = techJudges.shift();
    const tJudge2 = techJudges.shift();

    groups.push({
      type: 'T',
      judge_ids: {
        '*convertIds': {
          ids: [
            tJudge1?._id ? tJudge1._id : '',
            tJudge2?._id ? tJudge2._id : '',
          ],
        },
      },
    });
  }

  // one group of 3 tech judges if there are an odd number of judges
  if (techJudges.length === 3) {
    const tJudge1 = techJudges.shift();
    const tJudge2 = techJudges.shift();
    const tjudge3 = techJudges.shift();

    groups.push({
      type: 'T',
      judge_ids: {
        '*convertIds': {
          ids: [
            tJudge1?._id ? tJudge1._id : '',
            tJudge2?._id ? tJudge2._id : '',
            tjudge3?._id ? tjudge3._id : '',
          ],
        },
      },
    });
  } else if (techJudges.length) {
    const tJudge1 = techJudges.shift();
    const tJudge2 = techJudges.shift();

    groups.push({
      type: 'T',
      judge_ids: {
        '*convertIds': {
          ids: [
            tJudge1?._id ? tJudge1._id : '',
            tJudge2?._id ? tJudge2._id : '',
          ],
        },
      },
    });
  }

  // design judges
  desJudges.forEach((djudge) => {
    groups.push({
      type: 'D',
      judge_ids: {
        '*convertIds': {
          ids: [djudge._id],
        },
      },
    });
  });

  return groups;
}
