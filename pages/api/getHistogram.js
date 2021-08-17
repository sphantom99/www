import { getMaxAge } from '../../lib/dao';

export default async function getHistogram(req, res) {
  console.log('async function');
  const result = await getMaxAge([]);
  res.send(result);
}
