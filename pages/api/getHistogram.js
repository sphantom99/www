import { getMaxAge } from '../../lib/dao';

export default async function getHistogram(req, res) {
  const result = await getMaxAge(req.body.histogramFilter);
  res.send(result);
}
