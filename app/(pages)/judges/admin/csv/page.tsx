'use client';
import ingestCSV from '@actions/logic/ingestCSV';
import { useState } from 'react';

export default function CsvIngestion() {
  const [pending, setPending] = useState(false);
  const [response, setResponse] = useState('');

  const handler = async () => {
    setPending(true);
    const res = await ingestCSV();
    setResponse(JSON.stringify(res));
    setPending(false);
  };
  return (
    <div>
      <div>
        <div>file uploader here</div>
        <button onClick={handler}>CSV Ingestion</button>
        <p>{pending ? 'creating teams...' : response}</p>
      </div>
    </div>
  );
}
