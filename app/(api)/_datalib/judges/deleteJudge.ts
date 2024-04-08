import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { HttpError, NotFoundError } from '@utils/response/Errors';

export const DeleteJudge = async (id: string) => {
  try {
    const object_id = new ObjectId(id);
    const db = await getDatabase();

    const deleteStatus = await db.collection('judges').deleteOne({
      _id: object_id,
    });

    if (deleteStatus.deletedCount === 0) {
      throw new NotFoundError(`judge with id: ${id} not found.`);
    }

    // update judge_pair
    await db
      .collection('judge-pairs')
      .updateOne(
        { judge_ids: { $elemMatch: { $eq: object_id } } },
        { $pull: { judge_ids: object_id } }
      );

    return NextResponse.json(
      { ok: true, body: 'judge deleted', error: null },
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
