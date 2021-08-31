import { updateUser } from '../../lib/dao';

export default async function changeUsernamePassword(req, res) {
  const { password, username } = req.body;
  console.log(req.body);
  const result = await updateUser(password, username);
  res.send(result);
}
