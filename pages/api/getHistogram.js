import { getMaxAge } from '../../lib/dao';

export default async function getHistogram(req, res) {
  let result;
  console.log('body length:', req.body.histogramFilter?.length);
  console.log('body:', req.body.histogramFilter);
  if (req.body.histogramFilter.length === 0) {
    console.log('there was no body');
    result = await getMaxAge([]);
  } else if (req.body.histogramFilter.length !== 0) {
    console.log('there was a body');
    result = await getMaxAge(req.body.histogramFilter);
  }

  res.send(result);
}
