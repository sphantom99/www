export default function cleanFile(file) {
  const File = JSON.parse(file);
  console.log('Clean File');
  const { log } = File;
  const header = ['cache-control', 'host', 'cotent-type', 'expires', 'pragma', 'age'];
  const cleanJSON = log.entries.map((iter) => ({
    startedDateTime: iter.startedDateTime,
    serverIPAddress: iter.serverIPAddress,
    timings: iter.timings.wait,
    request: {
      method: iter.request.method,
      url: iter.request.url,
      headers: iter.request.headers.filter((item) => header.includes(item.name.toLowerCase())),
    },
    response: {
      status: iter.response.status,
      statusText: iter.response.statusText,
      headers: iter.response.headers.filter((item) => header.includes(item.name.toLowerCase())),
    },
  }));
  const data = JSON.stringify(cleanJSON);
  const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
  const ref = URL.createObjectURL(blob);
  const name = 'DownloadableHar.txt';
  return { ref, name };
}
