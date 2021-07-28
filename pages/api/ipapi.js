export default async function ipapi(ip) {
  let isp;
  let ispResponse;
  try {
    isp = await fetch(`http://ip-api.com/json/${ip}`, {
      method: 'GET',
      credentials: 'omit',
    });
    ispResponse = await isp.json();
  } catch (e) {
    console.log(e);
    return 'error';
  }
  return { ispResponse };
}
