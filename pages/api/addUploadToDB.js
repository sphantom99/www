import { updateLastUploadDate, uploadFileCall } from '../../lib/dao';

export default async function addUploadToDB(req, res) {
  // console.log(req.body);
  const { username, data } = req.body;
  // console.log('updating');
  const result = await updateLastUploadDate(username);
  const resultFile = await uploadFileCall(data);
  // console.log(data);
  res.json(result, resultFile);
}
