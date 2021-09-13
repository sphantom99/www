import { updateUser } from '../../lib/dao';

export default async function changeUsernamePassword(req, res) {
  const { password, username, newUsername } = req.body;
  console.log(req.body);
  const result = await updateUser(password, username, newUsername);
  res.send(result);
}
