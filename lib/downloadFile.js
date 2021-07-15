export default function downloadFile(file) {
  // console.log(file);
  // console.log('I have the file, time for cleanup');
  const blob = new Blob([file], { type: 'text/plain;charset=utf-8' });
  const ref = URL.createObjectURL(blob);
  const name = 'DownloadableHar.txt';
  return { ref, name };
}
