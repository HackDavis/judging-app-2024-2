import { parse } from 'csv-parse';
import * as fs from 'fs';
// import * as path from 'path';
// import { Result } from 'postcss';

// type TeamSubmission = {
//   number: number;
//   name: string;
//   tracks: string[];
//   tech_emphasis: number | 1;
//   design_emphasis: number | 1;
// };

// const parseCSV = (filePath: string): Promise<any[]> => {
//   return new Promise((resolve, reject) => {
//     const results: any[] = [];

//     // Create a read stream from the CSV file
//     const stream = fs
//       .createReadStream(filePath)
//       .pipe(csvParse({ delimiter: ',' }));

//     // Listen for data events
//     stream.on('data', (data) => {
//       results.push(data);
//     });

//     // Listen for the end of the stream
//     stream.on('end', () => {
//       resolve(results);
//     });

//     // Listen for errors
//     stream.on('error', (error) => {
//       reject(error);
//     });
//   });
// };

interface CsvRecord {
  name: string;
  numer: number;
  status: string;
  tracks: string[];
}

export default async function GetTeams() {
  const csvFilePath = 'app/(api)/_data/test_projects_2023.csv';

  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
  // const headers = [
  //   'Project Title',
  //   'Table Number',
  //   'Project Status',
  //   'Opt-In Prizes',
  // ];

  parse(
    fileContent,
    {
      delimiter: ',',
      columns: true,
    },
    (error, result: CsvRecord[]) => {
      if (error) {
        console.log('error:');
        console.error(error.message);
        return null;
      }
      console.log('Result', result);
    }
  );
}
