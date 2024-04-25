import * as fs from 'fs';
import csv from 'csv-parser';
import { NextResponse } from 'next/server';
import trackData from '../../_data/tracks.json' assert { type: 'json' };

const validTracks: string[] = trackData
  .map((track: track) => track.name)
  .filter((t) => t !== 'Best Hack for Social Good');

interface parsedRecord {
  name: string;
  number: number;
  tracks: string[];
}

interface track {
  name: string;
}

function sortTracks(track1: string, track2: string, chosentracks: string) {
  const tracksInOrder: string[] = [track1, track2];
  if (chosentracks.length < 2) {
    return tracksInOrder;
  } else {
    const otherTracks = chosentracks
      .split(',')
      .map((track: string) => track.trim())
      .filter(
        (track: string) =>
          validTracks.includes(track) && !tracksInOrder.includes(track)
      );

    tracksInOrder.push(...otherTracks);

    return tracksInOrder;
  }
}

export default async function csvAlgorithm() {
  const csvFilePath = 'app/(api)/_data/2024_data.csv';

  try {
    const parsePromise = new Promise<parsedRecord[]>((resolve, reject) => {
      const output: parsedRecord[] = [];

      fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => {
          if (data['Table Number'] !== '') {
            const track1 = data['Track #1'].trim();
            const track2 = data['Track #2'].trim();

            const tracksInOrder: string[] = sortTracks(
              track1,
              track2,
              data['Opt-In Prizes']
            );

            output.push({
              name: data['Project Title'],
              number: parseInt(data['Table Number']),
              tracks: tracksInOrder,
            });
          }
        })
        .on('end', () => {
          resolve(output);
        })
        .on('error', (error) => reject(error));
    });

    const results = await parsePromise;

    return NextResponse.json({ ok: true, body: results, error: null });
  } catch (e) {
    const error = e as Error;
    return NextResponse.json({ ok: false, body: null, error: error.message });
  }
}
