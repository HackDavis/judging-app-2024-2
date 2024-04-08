export default function FormToJSON(formData: FormData) {
  const output: any = {};
  const regex = new RegExp('^\\$ACTION.*');
  for (const [key, val] of formData.entries()) {
    if (!regex.test(key)) {
      output[key] = val;
    }
  }

  return output;
}
