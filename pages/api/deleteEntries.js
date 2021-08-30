import { deleteAllEntries } from '../../lib/dao';

export default async function deleteEntries(req, res) {
  const result = await deleteAllEntries();
  res.json(result);
}
