import { getUserStatisticsCall } from '../../lib/dao';

export default async function getUserStatistics(req, res) {
  const stats = await getUserStatisticsCall(req.body.username);
  res.json(stats);
}
