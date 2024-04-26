'use client';

import { useState, useEffect } from 'react';
import { getJudgeGroup } from '@actions/judgeGroups/getJudgeGroup';
import { useAuth } from './useAuth';

export function useJudgeGroup(): any {
  const { loading: auth_loading, user } = useAuth();
  const [members, setMembers] = useState<string[]>([]);
  const [curr_user, setUser] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (user) {
      const wrapper = async () => {
        if (user.judge_group_id) {
          const group = await getJudgeGroup(user.judge_group_id);
          const groupData = group.body;
          const judges = groupData ? groupData.judges : [];
          const names = judges.map((judge: { name: string }) => judge.name);
          const other_judges = names.filter(
            (judge: string) => judge !== user.name
          );
          setMembers(other_judges);
          setUser(user.name);
        }
        setLoading(false);
      };
      wrapper();
    }
  }, [user, auth_loading]);

  return { members, loading, user: curr_user };
}
