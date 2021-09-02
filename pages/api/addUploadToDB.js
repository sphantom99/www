import { updateLastUploadDate, uploadFileCall } from '../../lib/dao';

export default async function addUploadToDB(req, res) {
  // console.log(req.body);
  const { username, data } = req.body;
  // console.log('updating');
  const result = await updateLastUploadDate(username);
  const resultFile = await uploadFileCall(data);
  res.json(result, resultFile);
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '400mb',
    },
  },
};
