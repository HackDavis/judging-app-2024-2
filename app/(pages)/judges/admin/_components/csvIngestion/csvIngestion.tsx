import ingestCSV from '@actions/logic/ingestCSV';

export default function CsvIngestion() {
  return (
    <div>
      <div>
        <button onClick={async () => await ingestCSV()}>CSV Ingestion</button>
        <div>file uploader here</div>
      </div>
    </div>
  );
}
