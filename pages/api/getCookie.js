const Cookies = require('cookies');

export default async function getCookie(req, res) {
  const cookies = new Cookies(req, res);
  const cookieName = cookies.get('secret');
  res.send({ session: cookieName });
}
