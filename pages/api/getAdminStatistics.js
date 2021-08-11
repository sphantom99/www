import { getAdminStats } from '../../lib/dao';

export default async function getAdminStatistics(req, res) {
  const stats = await getAdminStats();
  res.json(stats);
}
