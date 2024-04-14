import { type NextRequest, NextResponse } from 'next/server';
import { GetManyJudges } from '@datalib/judges/getJudge';
import getQueries from '@utils/request/getQueries';
import groupJudges from '@utils/grouping/groupJudges';
import { CreateJudgeGroup } from '@datalib/judgeGroups/createJudgeGroup';

export async function GET(request: NextRequest) {
  getQueries(request);
  const res = await GetManyJudges();
  const data = await res.json();
  const groups = groupJudges(data.body);

  //   console.log(groups);

  groups.forEach(async (group) => {
    // const groupBody = await group.json();
    // console.log(group);
    const res = await CreateJudgeGroup(group);
    const data = await res.json();
    if (data.ok !== true) {
      console.log(data.error);
    }
  });

  return NextResponse.json(
    { ok: true, body: groups, error: null },
    { status: 200 }
  );
}
