import { getAdminStatsDiagram } from '../../lib/dao';

export default async function getAdminStatisticsDiagram(req, res) {
  //   console.log(req.body);
  const { filter } = req.body;
  const stats = await getAdminStatsDiagram(
    filter?.contentType,
    filter?.weekDay,
    filter?.httpMethod,
    filter?.provider,
  );
//   console.log('stats', stats);
  res.json(stats);
}
