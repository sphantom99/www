import { updateLastUploadDate } from '../../lib/dao';

export default async function addUploadToDB(req, res) {
  console.log(req.body);
  const { username } = req.body;
  console.log('updating');
  const result = await updateLastUploadDate(username);
  res.json(result);
}
