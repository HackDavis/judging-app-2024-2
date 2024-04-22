'use client';

import { getManyJudges } from '@actions/judges/getJudge';
import { useState, useEffect } from 'react';

export function useFirstUser() {
  const [pending, setPending] = useState(true);
  const [noUsers, setNoUsers] = useState<boolean>(false);

  useEffect(() => {
    const firstUserWrapper = async () => {
      const judgeList = await getManyJudges();
      setNoUsers(judgeList.body.length === 0);
      setPending(false);
    };

    firstUserWrapper();
  }, []);
  return { pending, noUsers };
}
