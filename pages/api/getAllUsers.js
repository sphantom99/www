import { getAllUsernames } from '../../lib/dao';

export default async function getAllUsers(req, res) {
  const result = await getAllUsernames();
  res.json(result);
}
