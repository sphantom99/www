import { getUserStatisticsCall } from '../../lib/dao';

export default async function getUserStatistics(req, res) {
  console.log(req.body.username);
  const stats = await getUserStatisticsCall(req.body.username);
  res.json(stats);
}
