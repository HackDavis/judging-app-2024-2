import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { NotFoundError, HttpError } from '@utils/response/Errors';

export const DeleteJudgePair = async (id: string) => {
  try {
    const object_id = new ObjectId(id);
    const db = await getDatabase();

    const deleteStatus = await db.collection('judge-pairs').deleteOne({
      _id: object_id,
    });

    if (deleteStatus.deletedCount === 0) {
      throw new NotFoundError(`judge-pair with id: ${id} not found.`);
    }

    // update judges
    await db
      .collection('judges')
      .updateMany(
        { judge_pair_id: object_id },
        { $set: { judge_pair_id: null } }
      );

    // update teams
    await db
      .collection('teams')
      .updateMany(
        { judge_pair_ids: { $elemMatch: { $eq: object_id } } },
        { $pull: { judge_pair_ids: object_id } }
      );

    return NextResponse.json(
      { ok: true, body: 'judge-pair deleted' },
      { status: 200 }
    );
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
};
