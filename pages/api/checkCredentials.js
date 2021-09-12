import { checkUserCredentials } from '../../lib/dao';

export default async function checkCredentials(req, res) {
  const { username, password } = req.body.values;
  const result = await checkUserCredentials(username, password);
  res.json(result);
}
