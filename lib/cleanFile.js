export default function cleanFile(file) {
  const File = JSON.parse(file);
  console.log('Clean File');
  const { log } = File;
  const cleanJSON = log.entries.map((iter) => ({
    startedDateTime: iter.startedDateTime,
    serverIPAddress: iter.serverIPAddress,
    timings: iter.timings.wait,
    request: {
      method: iter.request.method,
      url: iter.request.url,
      headers: iter.request.headers.filter(
        (item) => item.name.toLowerCase() === 'cache-control'
          || item.name.toLowerCase() === 'host'
          || item.name.toLowerCase() === 'content-type',
      ),
    },
    response: {
      status: iter.response.status,
      statusText: iter.response.statusText,
      headers: iter.response.headers.filter(
        (item) => item.name.toLowerCase() === 'cache-control'
          || item.name.toLowerCase() === 'host'
          || item.name.toLowerCase() === 'content-type'
          || item.name.toLowerCase() === 'expires'
          || item.name.toLowerCase() === 'pragma',
      ),
    },
  }));
  const data = JSON.stringify(cleanJSON);
  const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
  const ref = URL.createObjectURL(blob);
  const name = 'DownloadableHar.txt';
  return { ref, name };
}
