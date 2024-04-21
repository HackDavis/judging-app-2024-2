import * as fs from 'fs';
import csv from 'csv-parser';
import { NextResponse } from 'next/server';

interface parsedRecord {
  name: string;
  number: number;
  tracks: string[];
}

export default async function GetTeams() {
  const csvFilePath = 'app/(api)/_data/test_projects_2023.csv';

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
              tracks: data['Opt-In Prizes']
                .split(',')
                .filter(
                  (track: string) =>
                    !track.trim().toLowerCase().startsWith('sponsored by')
                )
                .map((track: string) => track.trim()),
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
