/* eslint-disable quote-props */
/* eslint-disable prefer-destructuring */

const MongoClient = require('mongodb').MongoClient;

export async function checkCreds(user, password) {
  const url = 'mongodb://localhost:27017';
  const client = await MongoClient.connect(url, { useNewUrlParser: true }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db('WEB');
    const collection = db.collection('users');
    const result = await collection.findOne({
      username: user,
      passwordHash: password,
    });
    return result;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function updateLastUploadDate(user) {
  const url = 'mongodb://localhost:27017';
  const client = await MongoClient.connect(url, { useNewUrlParser: true }).catch((err) => {
    console.log(err);
  });
  console.log('user:', user, 'time:', Date.now());

  if (!client) {
    return;
  }
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  today = `${dd}/${mm}/${yyyy}`;
  try {
    const db = client.db('WEB');
    const collection = db.collection('uploads');
    const result = await collection.insertOne({
      username: user,
      last_upload_data: today,
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function getUserStatisticsCall(user) {
  const url = 'mongodb://localhost:27017';
  const client = await MongoClient.connect(url, { useNewUrlParser: true }).catch((err) => {
    console.log(err);
  });
  if (!client) {
    return;
  }
  try {
    const db = client.db('WEB');
    const collection = db.collection('uploads');
    const date = await collection
      .find({
        username: user,
      })
      .sort({ last_upload_data: -1 })
      .limit(1)
      .toArray();
    const count = await collection
      .find({
        username: user,
      })
      .count();
    console.log(date[0], count);
    return { date, count };
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}
