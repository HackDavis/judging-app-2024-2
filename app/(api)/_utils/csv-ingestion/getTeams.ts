import { parse } from 'csv-parse';
import * as fs from 'fs';
import { NextResponse } from 'next/server';
interface parsedRecord {
  name: string;
  number: number;
  tracks: string[];
}

interface CsvRecord {
  'Project Title': string;
  'Table Number': string;
  'Submission Url': string;
  'Project Status': string;
  'Judging Status': string;
  'Highest Step Completed': string;
  'Project Created At': string;
  'About The Project': string;
  '"Try it out" Links': string;
  'Video Demo Link': string;
  'Opt-In Prizes': string;
  '': string;
}

export default async function GetTeams() {
  const csvFilePath = 'app/(api)/_data/test_projects_2023.csv';

  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
  try {
    const parsePromise = new Promise<parsedRecord[]>((resolve, reject) => {
      const output: parsedRecord[] = [];
      parse(
        fileContent,
        {
          delimiter: ',',
          columns: true,
        },
        (error, parsedResult: CsvRecord[]) => {
          if (error) {
            console.log('error:');
            console.error(error.message);
            reject(error);
          }

          parsedResult.forEach((data: CsvRecord) => {
            if (data['Table Number'] !== '') {
              output.push({
                name: data['Project Title'],
                number: parseInt(data['Table Number']),
                tracks: data['Opt-In Prizes']
                  .split(',')
                  .filter(
                    (track) =>
                      !track.trim().toLowerCase().startsWith('sponsored by')
                  )
                  .map((track) => track.trim()),
              });
            }
          });
          resolve(output);
        }
      );
    });

    const output = await parsePromise;

    return NextResponse.json({ ok: true, body: output, error: null });
  } catch (e) {
    const error = e as Error;
    return NextResponse.json({ ok: false, body: null, error: error.message });
  }
}
