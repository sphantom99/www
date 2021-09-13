import { updateUserPassword } from '../../lib/dao';

export default async function changePassword(req, res) {
  const { password, username } = req.body;
  console.log(req.body);
  const result = await updateUserPassword(password, username);
  res.send(result);
}
