import { checkCreds } from '../../lib/dao';

export default async function checkCredentials(req, res) {
  const { username, password } = req.body.values;
  const result = await checkCreds(username, password);
  res.json(result);
}
