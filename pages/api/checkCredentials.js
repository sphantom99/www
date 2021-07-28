import { checkCreds } from '../../lib/dao';

const cookie = require('cookie');

export default async function checkCredentials(req, res) {
  const { username, password } = req.body.values;
  const result = await checkCreds(username, password);
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('secret', String(username), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    }),
  );
  res.json(result);
}
