'use server';
import { DeleteAllJudgeGroups } from '@datalib/judgeGroups/deleteJudgeGroup';

export default async function deleteAllJudgeGroups() {
  DeleteAllJudgeGroups();
}
