/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
// import ipapi from '../pages/api/ipapi';
// import ipstack from '../pages/api/ipstack';
import cookie from 'js-cookie';

export default function cleanFile(file, server, setServer, client, setClient, setIsp) {
  const cook = cookie.get('secret');
  const File = JSON.parse(file);
  const { log } = File;
  const header = ['cache-control', 'host', 'content-type', 'expires', 'pragma', 'age'];
  // const ipAddress = log.entries[0].serverIPAddress;
  // async function geo() {
  //   const { serverResponse, clientResponse } = await ipstack(ipAddress);
  //   const { ispResponse } = await ipapi(clientResponse.ip);
  //   setServer({ ...server, lat: serverResponse.latitude, long: serverResponse.longitude });
  //   setClient({ ...client, lat: clientResponse.latitude, long: clientResponse.longitude });
  //   setIsp(ispResponse.isp);
  // }
  // geo();
  function headerRequest(iter) {
    const obj = {};
    iter.request.headers
      .filter((item) => header.includes(item.name.toLowerCase()))
      .map((head) => {
        obj[head.name] = head.value;
      });
    console.log(obj);
    return obj;
  }
  function headerResponse(iter) {
    const obj = {};
    iter.response.headers
      .filter((item) => header.includes(item.name.toLowerCase()))
      .map((head) => {
        obj[head.name] = head.value;
      });
    console.log(obj);
    return obj;
  }

  const cleanJSON = log.entries.map((iter) => ({
    username: cook,
    startedDateTime: iter.startedDateTime,
    serverIPAddress: iter.serverIPAddress,
    timings: iter.timings.wait,
    request: {
      method: iter.request.method,
      url: iter.request.url.split('/')[2],
      headers: headerRequest(iter),
    },
    response: {
      status: iter.response.status,
      statusText: iter.response.statusText,
      headers: headerResponse(iter),
    },
  }));
  const data = JSON.stringify(cleanJSON);
  const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
  const ref = URL.createObjectURL(blob);
  const name = 'DownloadableHar.txt';
  return {
    ref,
    name,
    data,
    cleanJSON,
  };
}
