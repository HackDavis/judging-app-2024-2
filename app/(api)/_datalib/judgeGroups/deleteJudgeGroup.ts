import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { NotFoundError, HttpError } from '@utils/response/Errors';

export const DeleteJudgeGroup = async (id: string) => {
  try {
    const object_id = new ObjectId(id);
    const db = await getDatabase();

    const deleteStatus = await db.collection('judgeGroups').deleteOne({
      _id: object_id,
    });

    if (deleteStatus.deletedCount === 0) {
      throw new NotFoundError(`judge-pair with id: ${id} not found.`);
    }

    // update judges
    await db
      .collection('judges')
      .updateMany(
        { judge_group_id: object_id },
        { $unset: { judge_group_id: '' } }
      );

    return NextResponse.json(
      { ok: true, body: 'Judge Group deleted', error: null },
      { status: 200 }
    );
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, body: null, error: error.message },
      { status: error.status || 400 }
    );
  }
};
