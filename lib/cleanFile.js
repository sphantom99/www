/* eslint-disable dot-notation */
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
  const header = [
    'cache-control',
    'host',
    'content-type',
    'expires',
    'pragma',
    'age',
    'last-modified',
  ];
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
    let flagMax = false;
    iter.response.headers
      .filter((item) => header.includes(item.name.toLowerCase()))
      .map((head) => {
        if (head.name === 'content-type') {
          const type = head.value.split('/')[0];
          obj[head.name] = type;
        }
        if (head.name === 'cache-control') {
          const temp = head.value.split(',').map((item) => {
            if (item.includes('max-age')) {
              const maxAge = item.split(/=|:/);
              // console.log('Before', parseInt(maxAge[1].trim()));
              obj['maxAge'] = parseInt(maxAge[1].trim()) === 0 || parseInt(maxAge[1].trim()) === null
                ? undefined
                : parseInt(maxAge[1].trim());
              flagMax = true;
            } else {
              obj[item.trim()] = item.trim();
            }
            if (item.includes('max-stale')) {
              const max = item.split('=');
              obj['maxStale'] = max[1];
            }
            if (item.includes('mix-fresh')) {
              const max = item.split('=');
              obj['minFresh'] = max[1];
            }
          });
          obj[head.name] = head.value;
        }
        if (head.name !== 'content-type' && head.name !== 'cache-control') {
          obj[head.name] = head.value;
        }
      });
    if (obj['maxAge'] === undefined && obj['expires'] && obj['last-modified']) {
      const expires = new Date(obj['expires']);
      const lastModified = new Date(obj['last-modified']);
      obj['maxAge'] = Number.isNaN(parseInt(expires - lastModified) / 1000)
        ? undefined
        : parseInt(expires - lastModified) / 1000;
    }
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

  const clientIp = await fetch(
    'http://api.ipstack.com/check?access_key=492ecef75baf8e594140fa9327af2a6c',
    {
      method: 'GET',
      credentials: 'omit',
    },
  );
  const clientCoordinates = await clientIp.json();
  const coordinates = {
    lat: clientCoordinates.latitude,
    long: clientCoordinates.longitude,
  };

  const cleanJSON = log.entries.map((iter) => ({
    username: cook[0],
    clientIp: clientCoordinates.ip,
    clientCoordinates: coordinates,
    serverISP: ispResponse.isp,
    startedDateTime: iter.startedDateTime,
    hour: moment(iter.startedDateTime).format('HH'),
    day: new Date(moment(iter.startedDateTime).format('YYYY-MM-DD')).getDay(),
    serverIPAddress: iter.serverIPAddress?.replace('[', '').replace(']', ''),
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
