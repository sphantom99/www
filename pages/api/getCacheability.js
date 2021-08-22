import { getCacheabilityDirectives } from '../../lib/dao';

export default async function getCacheability(req, res) {
  const results = await getCacheabilityDirectives(req.body.cacheabilityFilter);
  res.send(results);
}
