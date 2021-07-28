import { getUserStatisticsCall } from '../../lib/dao';

export default async function getUserStatistics(req, res) {
  const username = req.body;
  const stats = await getUserStatisticsCall(username);
  res.json(stats);
}
