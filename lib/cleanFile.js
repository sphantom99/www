import ipapi from '../api/ipapi';
import ipstack from '../api/ipstack';

export default function cleanFile(file, server, setServer, client, setClient, setIsp) {
  const File = JSON.parse(file);
  const { log } = File;
  const header = ['cache-control', 'host', 'cotent-type', 'expires', 'pragma', 'age'];
  const ipAddress = log.entries[0].serverIPAddress;
  async function geo() {
    const { serverResponse, clientResponse } = await ipstack(ipAddress);
    const { ispResponse } = await ipapi(clientResponse.ip);
    setServer({ ...server, lat: serverResponse.latitude, long: serverResponse.longitude });
    setClient({ ...client, lat: clientResponse.latitude, long: clientResponse.longitude });
    setIsp(ispResponse.isp);
  }
  geo();
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
  return { ref, name, data };
}
