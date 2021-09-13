import { updateUserUsername } from '../../lib/dao';

export default async function changePassword(req, res) {
  const { oldUsername, newUsername } = req.body;
  console.log(req.body);
  const result = await updateUserUsername(oldUsername, newUsername);
  console.log(result);
  res.send(result);
}
