/* eslint-disable radix */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import cookie from 'js-cookie';
// import ipstack from '../pages/api/ipstack';
import moment from 'moment';

export default async function cleanFile(file) {
  const cook = cookie.get('secret').split(',');
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
    const today = new Date();
    iter.response.headers
      .filter((item) => header.includes(item.name.toLowerCase()))
      .map((head) => {
        if (head.name === 'content-type') {
          const type = head.value.split('/')[0];
          obj[head.name] = type;
        }
        if (head.name === 'expires') {
          const temp = new Date(iter.startedDateTime);
          const expiresDate = new Date(head.value);
          obj['max-age'] = parseInt(temp - expiresDate);
        }
        if (head.name === 'cache-control') {
          const temp = head.value.split(',').map((item) => {
            if (item.includes('max-age')) {
              const maxAge = item.split('=');
              obj['max-age'] = parseInt(maxAge[1].trim());
            } else {
              obj[item] = item.trim();
            }
          });
          obj[head.name] = head.value;
        }
        if (head.name !== 'content-type' && head.name !== 'cache-control') {
          obj[head.name] = head.value;
        }
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
    username: cook[0],
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
