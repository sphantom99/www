const cookie = require('cookie');

export default async function logout(req, res) {
  console.log('logging out');
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('secret', '', {
      httpOnly: true,
      maxAge: 0,
    }),
  );
  res.json();
}
