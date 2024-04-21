import Judge from '@typeDefs/judges';

function createGroups(judgeArray: Judge[], groupType: string) {
  const groupArray: { type: string; judge_ids: object }[] = [];

  while (judgeArray.length > 3) {
    const judge1 = judgeArray.shift();
    const judge2 = judgeArray.shift();

    groupArray.push({
      type: groupType,
      judge_ids: {
        '*convertIds': {
          ids: [judge1?._id, judge2?._id],
        },
      },
    });
  }

  if (judgeArray.length === 3) {
    const judge1 = judgeArray.shift();
    const judge2 = judgeArray.shift();
    const judge3 = judgeArray.shift();

    groupArray.push({
      type: groupType,
      judge_ids: {
        '*convertIds': {
          ids: [judge1?._id, judge2?._id, judge3?._id],
        },
      },
    });
  } else if (judgeArray.length) {
    const judge1 = judgeArray.shift();
    const judge2 = judgeArray.shift();

    groupArray.push({
      type: groupType,
      judge_ids: {
        '*convertIds': {
          ids: [judge1?._id, judge2?._id],
        },
      },
    });
  }

  return groupArray;
}

export default function groupingAlgorithm(judges: Judge[]) {
  const techJudges = judges.filter((judge) => judge.specialty === 'tech');
  const generalJudges = judges.filter((judge) => judge.specialty === 'general');
  const desJudges = judges.filter((judge) => judge.specialty === 'design');

  const Tgroups = createGroups(techJudges, 'T');
  const Ggroups = createGroups(generalJudges, 'G');
  const Dgroups = createGroups(desJudges, 'D');

  const groups: { type: string; judge_ids: object }[] = [
    ...Tgroups,
    ...Ggroups,
    ...Dgroups,
  ];

  return groups;
}
