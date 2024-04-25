'use server';
import fs from 'fs';

export default async function uploadFile(formData: FormData) {
  const file = formData.get('file') as File;
  const data = await file.arrayBuffer();
  return new Promise((resolve, rejects) => {
    fs.writeFile(
      'app/(api)/_data/2024_data.csv',
      Buffer.from(data),
      (error) => {
        if (error) {
          rejects({
            ok: false,
            body: null,
            error: error?.message,
          });
        } else {
          resolve({
            ok: true,
            body: `Successfully uploaded.`,
            error: null,
          });
        }
      }
    );
  });
}
