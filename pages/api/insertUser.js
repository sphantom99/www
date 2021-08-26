import { postUser } from '../../lib/dao';

export default async function insertUser(req, res) {
  const result = await postUser(req.body.creds);
  res.send(result);
}
