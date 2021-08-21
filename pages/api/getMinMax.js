import { getMinMaxPercentages } from '../../lib/dao';

export default async function getMinMax(req, res) {
//   console.log(req.body.minMaxFilter);
  const result = await getMinMaxPercentages(req.body.minMaxFilter);
  res.send(result);
}
