/* eslint-disable dot-notation */
/* eslint-disable radix */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import cookie from 'js-cookie';
import moment from 'moment';

export default async function cleanFile(file) {
  const cook = cookie.get('secret').split(',');
  const File = JSON.parse(file);
  const { log } = File;
  const header = [
    'cache-control',
    'Cache-Control',
    'host',
    'content-type',
    'Content-Type',
    'expires',
    'pragma',
    'age',
    'last-modified',
  ];
  const privateIps = ['127', '192', '10'];

  function headerRequestFormat(iter) {
    const headerFormattedObject = {};
    iter.request.headers
      .filter((item) => header.includes(item.name.toLowerCase()))
      .map((head) => {
        if (head.name === 'content-type' || head.name === 'Content-Type') {
          headerFormattedObject[head.name] = head.value.split('/')[0];
        }
        if (head.name === 'cache-control' || head.name === 'Cache-Control') {
          head.value.split(',').map((item) => {
            if (item.includes('max-stale')) {
              headerFormattedObject['maxStale'] = item.split('=')[1];
            } else if (item.includes('min-fresh')) {
              headerFormattedObject['minFresh'] = item.split('=')[1];
            }
          });
          headerFormattedObject[head.name] = head.value;
        }
      });
    return headerFormattedObject;
  }
  function headerResponseFormat(iter) {
    const headerFormattedObject = {};
    iter.response.headers
      .filter((item) => header.includes(item.name.toLowerCase()))
      .map((head) => {
        if (head.name === 'content-type' || head.name === 'Content-Type') {
          const type = head.value.split('/')[0];
          headerFormattedObject[head.name] = type;
        }
        if (head.name === 'cache-control' || head.name === 'Cache-Control') {
          const temp = head.value.split(',').map((item) => {
            if (item.includes('max-age')) {
              const maxAge = item.split(/=|:| /);
              headerFormattedObject['maxAge'] = parseInt(maxAge[1]?.trim()) === (null || undefined || 0)
                ? undefined
                : parseInt(maxAge[1].trim());
            } else if (item.includes('max-stale')) {
              headerFormattedObject['maxStale'] = item.split('=')[1];
            } else if (item.includes('min-fresh')) {
              headerFormattedObject['minFresh'] = item.split('=')[1];
            } else if (
              item.includes('no-store')
              || item.includes('no-cache')
              || item.includes('private')
              || item.includes('public')
            ) {
              headerFormattedObject[item.trim()] = item.trim();
            }
          });
          headerFormattedObject[head.name] = head.value;
        }
        if (head.name !== 'content-type' && head.name !== 'cache-control') {
          headerFormattedObject[head.name] = head.value;
        }
      });
    if (!headerFormattedObject['maxAge'] && headerFormattedObject['expires'] && headerFormattedObject['last-modified']) {
      const expires = new Date(headerFormattedObject['expires']);
      const lastModified = new Date(headerFormattedObject['last-modified']);
      headerFormattedObject['maxAge'] = Number.isNaN(parseInt(expires - lastModified) / 1000)
        ? undefined
        : parseInt(expires - lastModified) / 1000;
    }
    headerFormattedObject['maxAge'] = headerFormattedObject['maxAge'] === null || headerFormattedObject['maxAge'] <= 0 || Number.isNaN(headerFormattedObject['maxAge'])
      ? undefined
      : headerFormattedObject['maxAge'];

    return headerFormattedObject;
  }
  const checkedMyself = await fetch(
    'http://api.ipstack.com/check?access_key=492ecef75baf8e594140fa9327af2a6c',
    {
      method: 'GET',
      credentials: 'omit',
    },
  );
  const { ip, latitude, longitude } = await checkedMyself.json();

  const checkedMyIsp = await fetch(`http://ip-api.com/json/${clientInformation.ip}`, {
    method: 'GET',
    credentials: 'omit',
  });
  const { isp } = await checkedMyIsp.json();

  const cleanJSON = log.entries.map((iter) => ({
    username: cook[0],
    clientIp: ip,
    clientCoordinates: {
      lat: latitude,
      long: longitude,
    },
    serverISP: isp,
    startedDateTime: iter.startedDateTime,
    hour: moment(iter.startedDateTime).format('HH'),
    day: new Date(moment(iter.startedDateTime).format('YYYY-MM-DD')).getDay(),
    serverIPAddress:
      iter.serverIPAddress?.replace('[', '').replace(']', '') === ''
      || privateIps.includes(iter.serverIPAddress?.replace('[', '').replace(']', '').split('.')[0])
        ? undefined
        : iter.serverIPAddress?.replace('[', '').replace(']', ''),
    timings: iter.timings.wait,
    request: {
      method: iter.request.method,
      url: iter.request.url.split('/')[2],
      headers: headerRequestFormat(iter),
    },
    response: {
      status: iter.response.status,
      statusText: iter.response.statusText,
      headers: headerResponseFormat(iter),
    },
  }));
  console.log(cleanJSON);
  const data = JSON.stringify(cleanJSON);
  const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
  const ref = URL.createObjectURL(blob);
  const name = 'CleanHar.txt';
  return {
    ref,
    name,
    data,
    cleanJSON,
  };
}
