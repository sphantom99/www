export default async function ipstack(ip) {
  let server;
  let client;
  let serverResponse;
  let clientResponse;
  try {
    server = await fetch(
      `http://api.ipstack.com/${ip}?access_key=492ecef75baf8e594140fa9327af2a6c`,
      {
        method: 'GET',
        credentials: 'omit',
      },
    );
    client = await fetch(
      'http://api.ipstack.com/check?access_key=492ecef75baf8e594140fa9327af2a6c',
      {
        method: 'GET',
        credentials: 'omit',
      },
    );
    serverResponse = await server.json();
    clientResponse = await client.json();
  } catch (e) {
    console.log(e);
    return 'error';
  }
  return { serverResponse, clientResponse };
}
