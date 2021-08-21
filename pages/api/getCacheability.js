import { getCacheabilityDirectives } from '../../lib/dao';

export default async function getCacheability(req, res) {
  console.log(req.body.cacheabilityFilter);
  const results = await getCacheabilityDirectives(req.body.cacheabilityFilter);
  res.send(results);
}
