'use client';
import ingestCSV from '@actions/logic/ingestCSV';
import React, { useState } from 'react';
import uploadFile from '@actions/logic/uploadFile';
import styles from './csv.module.scss';

export default function CsvIngestion() {
  const [pending, setPending] = useState(false);
  const [response, setResponse] = useState('');
  const [uploadRes, setUploadRes] = useState('');

  const handleIngestion = async () => {
    setPending(true);
    const res = await ingestCSV();
    setResponse(JSON.stringify(res));
    setPending(false);
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await uploadFile(formData);
    setUploadRes(JSON.stringify(res));
  };

  return (
    <div>
      <div>
        <h4>Upload CSV:</h4>
        <form onSubmit={handleUpload} className={styles.form}>
          <input type="file" accept=".csv" name="file" id="file" />
          <button type="submit">Upload</button>
          <p>{uploadRes}</p>
        </form>
        <h4>Create Teams:</h4>
        <button onClick={handleIngestion}>Start CSV Ingestion</button>
        <p>{pending ? 'creating teams...' : response}</p>
      </div>
    </div>
  );
}
