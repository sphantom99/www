import { getUser } from '../../lib/dao';

export default async function getUserPassword(req, res) {
  const result = await getUser(req.body.username);
  res.json(result);
}
