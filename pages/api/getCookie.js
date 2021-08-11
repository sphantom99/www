const Cookies = require('cookies');

export default async function getCookie(req, res) {
  const cookies = new Cookies(req, res);
  const cookieName = cookies.get('secret');
  console.log('this is shte cookie', cookieName);
  res.json(cookieName);
}
