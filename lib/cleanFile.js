/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import cookie from 'js-cookie';
// import ipstack from '../pages/api/ipstack';
import moment from 'moment';

export default async function cleanFile(file) {
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
    return obj;
  }
  function headerResponse(iter) {
    const obj = {};
    iter.response.headers
      .filter((item) => header.includes(item.name.toLowerCase()))
      .map((head) => {
        obj[head.name] = head.value;
      });
    return obj;
  }
  const client = await fetch(
    'http://api.ipstack.com/check?access_key=492ecef75baf8e594140fa9327af2a6c',
    {
      method: 'GET',
      credentials: 'omit',
    },
  );
  const clientResponse = await client.json();
  const isp = await fetch(`http://ip-api.com/json/${clientResponse.ip}`, {
    method: 'GET',
    credentials: 'omit',
  });
  const ispResponse = await isp.json();

  const cleanJSON = log.entries.map((iter) => ({
    username: cook,
    serverISP: ispResponse.isp,
    startedDateTime: iter.startedDateTime,
    hour: moment(iter.startedDateTime).format('HH'),
    day: new Date(moment(iter.startedDateTime).format('YYYY-MM-DD')).getDay(),
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
  console.log(cleanJSON);
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
