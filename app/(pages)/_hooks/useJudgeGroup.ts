'use client';

import { useState, useEffect } from 'react';
import { getManyJudgeGroups } from '@actions/judgeGroups/getJudgeGroup';
import { useAuth } from './useAuth';

export function useJudgeGroup(): any {
  const { loading: auth_loading, user } = useAuth();
  const [members, setMembers] = useState<string[]>([]);
  const [curr_user, setUser] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (user) {
      const wrapper = async () => {
        const group = await getManyJudgeGroups({
          judge_ids: {
            '*convertId': { id: user._id },
          },
        });
        const groupData = group.body;
        const judges = groupData.length !== 0 ? groupData[0].judges : [];
        const names = judges.map((judge: { name: string }) => judge.name);
        const other_judges = names.filter(
          (judge: string) => judge !== user.name
        );
        setMembers(other_judges);
        setUser(user.name);
        setLoading(false);
      };
      wrapper();
    }
  }, [user, auth_loading]);

  return { members, loading, user: curr_user };
}
