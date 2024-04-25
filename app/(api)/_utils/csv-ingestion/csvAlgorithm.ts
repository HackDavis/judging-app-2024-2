import * as fs from 'fs';
import csv from 'csv-parser';
import { NextResponse } from 'next/server';
import trackData from '../../_data/tracks.json' assert { type: 'json' };

interface parsedRecord {
  name: string;
  number: number;
  tracks: string[];
}

interface track {
  name: string;
}

export default async function csvAlgorithm() {
  const csvFilePath = 'app/(api)/_data/2024_data.csv';
  const validTracks: string[] = trackData
    .map((track: track) => track.name)
    .filter((t) => t !== 'Best Hack for Social Good');

  try {
    const parsePromise = new Promise<parsedRecord[]>((resolve, reject) => {
      const output: parsedRecord[] = [];

      fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => {
          if (data['Table Number'] !== '') {
            output.push({
              name: data['Project Title'],
              number: parseInt(data['Table Number']),
              // TODO: tracks order of importance
              tracks: data['Opt-In Prizes']
                .split(',')
                .filter((track: string) =>
                  validTracks.find((t) => t === track)
                ),
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
