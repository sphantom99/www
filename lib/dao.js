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

export async function uploadFileCall(data) {
  const url = 'mongodb://localhost:27017';
  const client = await MongoClient.connect(url, { useNewUrlParser: true }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db('WEB');
    const collection = db.collection('entries');
    const result = await collection.insertMany(data);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function getAdminStats() {
  const url = 'mongodb://localhost:27017';
  const client = await MongoClient.connect(url, { useNewUrlParser: true }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db('WEB');
    const collection = db.collection('entries');
    const collectionUsers = db.collection('users');

    const disDom = await collection.distinct('request.url');
    const disIsp = await collection.distinct('serverISP');

    const distinctDomains = disDom.length;
    const distinctIsps = disIsp.length;
    const entryPerMethod = await collection
      .aggregate([
        {
          $group: {
            _id: '$request.method',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            method: '$_id',
            count: 1,
            sum: 1,
          },
        },
      ])
      .toArray();
    const entryPerStatus = await collection
      .aggregate([
        {
          $group: {
            _id: '$response.status',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            status: '$_id',
            count: 1,
            sum: 1,
          },
        },
      ])
      .toArray();
    const usersCount = await collectionUsers.find().count();
    const averageTiming = await collection
      .aggregate([
        {
          $group: {
            _id: '$response.headers.content-type',
            requests: { $sum: 1 },
            averageTime: { $avg: '$timings' },
          },
        },
        {
          $project: {
            _id: 0,
            contentType: '$_id',
            requests: '$requests',
            averageTime: '$averageTime' / 1000,
            count: 1,
            sum: 1,
          },
        },
      ])
      .toArray();
    return {
      entryPerMethod,
      entryPerStatus,
      usersCount,
      distinctDomains,
      averageTiming,
      distinctIsps,
    };
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}
