import { getIpsByUser } from '../../lib/dao';

export default async function getDistinctIps(req, res) {
  const result = await getIpsByUser();
  res.json(result);
}
