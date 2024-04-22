import { NextResponse } from 'next/server';
import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import HttpError from '@utils/response/HttpError';
import { ObjectId } from 'mongodb';

export const GetManySubmissions = async (query: object = {}) => {
  try {
    const db = await getDatabase();
    const submissions = await db
      .collection('submissions')
      .find(query)
      .toArray();

    return NextResponse.json(
      { ok: true, body: submissions, error: null },
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

export const GetSubmission = async (judge_id: string, team_id: string) => {
  try {
    const judge_object_id = new ObjectId(judge_id);
    const team_object_id = new ObjectId(team_id);
    const db = await getDatabase();
    const submission = await db.collection('submissions').findOne({
      judge_id: judge_object_id,
      team_id: team_object_id,
    });

    if (submission === null) {
      throw Error(
        `Submission with judge id: ${judge_id} and team id: ${team_id} not found.`
      );
    }

    return NextResponse.json(
      { ok: true, body: submission, error: null },
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
