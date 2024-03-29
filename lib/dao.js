/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-spread */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable prefer-destructuring */
import axios from "axios";
import moment from "moment";

const MongoClient = require("mongodb").MongoClient;

export async function checkUserCredentials(user, password) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("users");
    const result = await collection.findOne({
      username: user,
      encryptedPassword: password,
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
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });
  console.log("user:", user, "time:", Date.now());

  if (!client) {
    return;
  }
  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("uploads");
    const result = await collection.insertOne({
      username: user,
      last_upload_data: moment().format("DD/MM/YYYY"),
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
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });
  if (!client) {
    return;
  }
  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("uploads");
    const date = await collection
      .find({
        username: user,
      })
      .sort({ _id: -1 })
      .limit(1)
      .toArray();
    const count = await collection
      .find({
        username: user,
      })
      .count();
    return { date, count };
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function uploadFileCall(data) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("entries");
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
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("entries");
    const collectionUsers = db.collection("users");

    const disDom = await collection.distinct("request.url");
    const disIsp = await collection.distinct("serverISP");

    const distinctDomains = disDom.length;
    const distinctIsps = { count: disIsp.length, unique: disIsp };
    const entryPerMethod = await collection
      .aggregate([
        {
          $group: {
            _id: "$request.method",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            method: "$_id",
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
            _id: "$response.status",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            status: "$_id",
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
            _id: "$response.headers.content-type",
            requests: { $sum: 1 },
            averageTime: { $avg: "$timings" },
          },
        },
        {
          $project: {
            _id: 0,
            contentType: "$_id",
            requests: "$requests",
            averageTime: "$averageTime" / 1000,
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
export async function getAdminStatsDiagram(
  typeParam,
  dayParam,
  methodParam,
  ispParam
) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }
  const typeQuery =
    typeParam?.length !== 0 && typeParam !== null
      ? { "response.headers.content-type": { $in: typeParam } }
      : null;
  const dayQuery =
    dayParam?.length !== 0 && dayParam !== null
      ? { day: { $in: dayParam } }
      : null;
  const methodQuery =
    methodParam?.length !== 0 && methodParam !== null
      ? { "request.method": { $in: methodParam } }
      : null;
  const ispQuery =
    ispParam?.length !== 0 && ispParam !== null
      ? { serverISP: { $in: ispParam } }
      : null;
  const filterFlag = typeParam || dayParam || methodParam || ispParam;
  const filter = {
    ...typeQuery,
    ...dayQuery,
    ...methodQuery,
    ...ispQuery,
  };
  // console.log('filter:', filter);
  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("entries");
    let averageTimePerHour;
    if (!filterFlag) {
      averageTimePerHour = await collection
        .aggregate([
          {
            $group: {
              _id: "$hour",
              // requests: { $sum: 1 },
              averageTime: { $avg: "$timings" },
              day: { $first: "$day" },
              method: { $first: "$request.method" },
              contentType: { $first: "$response.headers.content-type" },
              isp: { $first: "$isp" },
            },
          },
          {
            $project: {
              id: "$_id",
              day: "$day",
              method: "$method",
              contentType: "$contentType",
              isp: "$isp",
              requests: "$requests",
              averageTime: "$averageTime" / 1000,
              count: 1,
              sum: 1,
            },
          },
          { $sort: { id: 1 } },
        ])
        .toArray();
    } else if (filterFlag) {
      averageTimePerHour = await collection
        .aggregate([
          { $match: filter },
          {
            $group: {
              _id: "$hour",
              averageTime: { $avg: "$timings" },
            },
          },
          {
            $addFields: { id: "$_id" },
          },
        ])
        .toArray();
    }

    // console.log(averageTimePerHour);
    return averageTimePerHour;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function getMaxAge(filters) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const typeQuery =
      filters.contentType?.length !== 0 && filters.contentType !== undefined
        ? { "response.headers.content-type": { $in: filters.contentType } }
        : null;

    const ispQuery =
      filters.isp?.length !== 0 && filters.isp !== undefined
        ? { serverISP: { $in: filters.isp } }
        : null;

    const filterFlag =
      filters.contentType?.length !== 0 || filters.isp?.length !== 0;
    const filter = {
      ...typeQuery,
      ...ispQuery,
    };
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("entries");
    let result;
    if (filterFlag) {
      result = await collection
        .aggregate([
          {
            $match: filter,
          },
          { $match: { "response.headers.maxAge": { $exists: true } } },
        ])
        .sort({ "response.headers.maxAge": -1 })
        .toArray();
    } else if (!filterFlag) {
      result = await collection
        .find({ "response.headers.maxAge": { $exists: true } })
        .sort({ "response.headers.maxAge": -1 })
        .toArray();
    }
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function getMinMaxPercentages(filters) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }
  const typeQuery =
    filters.contentType?.length !== 0 && filters.contentType !== undefined
      ? { "response.headers.content-type": { $in: filters.contentType } }
      : null;

  const ispQuery =
    filters.isp?.length !== 0 && filters.isp !== undefined
      ? { serverISP: { $in: filters.isp } }
      : null;

  const filterFlag =
    filters.contentType?.length !== 0 || filters.isp?.length !== 0;
  const filter = {
    ...typeQuery,
    ...ispQuery,
  };
  console.log(filter);
  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("entries");
    let max;
    let min;
    // console.log('this is the content type', contentType);
    // if (contentType.length === 0) console.log('no params');
    if (filterFlag) {
      max = await collection
        .aggregate([
          {
            $match: filter,
          },
          { $match: { "request.headers.maxStale": { $exists: true } } },
        ])
        .toArray();
      min = await collection
        .aggregate([
          {
            $match: filter,
          },
          { $match: { "request.headers.minFresh": { $exists: true } } },
        ])
        .toArray();
    } else if (!filterFlag) {
      max = await collection
        .find({ "request.headers.maxStale": { $exists: true } })
        .toArray();
      min = await collection
        .find({ "request.headers.minFresh": { $exists: true } })
        .toArray();
    }
    // max = await collection.find({ 'response.headers.maxStale': { $exists: true } }).toArray();
    // min = await collection.find({ 'response.headers.minFresh': { $exists: true } }).toArray();
    const all = await collection.find().toArray();
    // console.log(min.length, max.length, all.count);
    return { max: max.length, min: min.length, all: all.length };
    // return {};
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function getCacheabilityDirectives(filters) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }
  const typeQuery =
    filters.contentType?.length !== 0 && filters.contentType !== undefined
      ? { "response.headers.content-type": { $in: filters.contentType } }
      : null;

  const ispQuery =
    filters.isp?.length !== 0 && filters.isp !== undefined
      ? { serverISP: { $in: filters.isp } }
      : null;

  const filterFlag =
    filters.contentType?.length !== 0 || filters.isp?.length !== 0;
  const filter = {
    ...typeQuery,
    ...ispQuery,
  };
  console.log(filter);
  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("entries");
    let publicCache;
    let privateCache;
    let noCache;
    let noStore;
    // console.log('this is the content type', contentType);
    // if (contentType.length === 0) console.log('no params');
    if (filterFlag) {
      publicCache = await collection
        .aggregate([
          {
            $match: filter,
          },
          { $match: { "response.headers.public": { $exists: true } } },
        ])
        .toArray();
      privateCache = await collection
        .aggregate([
          {
            $match: filter,
          },
          { $match: { "response.headers.private": { $exists: true } } },
        ])
        .toArray();
      noCache = await collection
        .aggregate([
          {
            $match: filter,
          },
          { $match: { "response.headers.no-cache": { $exists: true } } },
        ])
        .toArray();
      noStore = await collection
        .aggregate([
          {
            $match: filter,
          },
          { $match: { "response.headers.no-store": { $exists: true } } },
        ])
        .toArray();
    }
    if (!filterFlag) {
      publicCache = await collection
        .find({ "response.headers.public": { $exists: true } })
        .toArray();
      privateCache = await collection
        .find({ "response.headers.private": { $exists: true } })
        .toArray();
      noCache = await collection
        .find({ "response.headers.no-cache": { $exists: true } })
        .toArray();
      noStore = await collection
        .find({ "response.headers.no-store": { $exists: true } })
        .toArray();
    }
    const all = await collection.find().toArray();
    return {
      publicCache: publicCache.length,
      privateCache: privateCache.length,
      noCache: noCache.length,
      noStore: noStore.length,
      all: all.length,
    };
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function updateUserPassword(password, user) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("users");
    const result = await collection.updateOne(
      { username: user },
      {
        $set: {
          encryptedPassword: password,
        },
      }
    );
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function updateUserUsername(oldUsername, newUsername) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("users");
    const entries = db.collection("entries");
    const resultExists = await collection.findOne({
      username: newUsername,
    });
    console.log(resultExists);
    if (!resultExists) {
      const result = await collection.updateOne(
        { username: oldUsername },
        {
          $set: {
            username: newUsername,
          },
        }
      );
      const result2 = await entries.updateMany(
        { username: oldUsername },
        {
          $set: {
            username: newUsername,
          },
        }
      );
      return result;
    }
    return false;
    // console.log(result);
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function getUser(user) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("users");
    const result = await collection.findOne({
      username: user,
    });
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function postUser(user) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }
  const { username, password, firstName, lastName, email } = user;
  const usernameValue = username;
  const emailValue = email;
  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("users");
    const result = await collection.insertOne({
      username: usernameValue,
      encryptedPassword: password,
      first_name: firstName,
      last_name: lastName,
      email: emailValue,
      is_admin: false,
    });
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function getAllUsernames() {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("users");
    const result = await collection.find().toArray();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function getIpsByUser() {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("entries");
    let ipsPerClientCoordinates = await collection
      .aggregate([
        {
          $group: {
            _id: "$clientCoordinates",
            ips: { $addToSet: "$serverIPAddress" },
          },
        },
        { $sort: { serverIPAddress: 1 } },
        {
          $project: {
            _id: 0,
            client: "$_id",
            ips: "$ips",
          },
        },
      ])
      .toArray();
    const countPerIp = await collection
      .aggregate([
        {
          $group: {
            _id: "$serverIPAddress",
            count: { $sum: 1 },
          },
        },
        { $sort: { count: 1 } },
        {
          $project: {
            _id: 0,
            ip: "$_id",
            count: 1,
            sum: 1,
          },
        },
      ])
      .toArray();
    const uniqueIps = await collection.distinct("serverIPAddress");
    ipsPerClientCoordinates = ipsPerClientCoordinates.map((item) => ({
      client: item.client,
      ips: item.ips.filter((countIp) => countIp !== ""),
    }));
    const ipsPerClientCoordinatesWithCount = ipsPerClientCoordinates.map(
      (item) => ({
        client: item.client,
        ipCount: item.ips.map(
          (ip) => countPerIp.filter((countIp) => countIp.ip === ip)[0]
        ),
      })
    );

    let ipapiCoordinateResponse = [];
    const validIps = [];
    uniqueIps.map((item) => {
      if (item !== "") {
        validIps.push(item);
      }
    });

    const rounds = Math.ceil(uniqueIps.length / 100);
    let i;
    for (i = 0; i < rounds; i++) {
      if (i !== rounds - 1) {
        await axios
          .post(
            "http://ip-api.com/batch",
            validIps.slice(i * 100, (i + 1) * 100),
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              ipapiCoordinateResponse = ipapiCoordinateResponse.concat(
                response.data
              );
              return response.data;
            }
          });
      } else {
        await axios
          .post("http://ip-api.com/batch", validIps.slice(i * 100), {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((response) => {
            if (response.status === 200) {
              ipapiCoordinateResponse = ipapiCoordinateResponse.concat(
                response.data
              );
              return response.data;
            }
          });
      }
    }
    return {
      ipsPerClientCoordinatesWithCount,
      ipsPerClientCoordinates,
      ipapiCoordinateResponse,
    };
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function getUniqueIps(user) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("entries");
    const uniqueIps = await collection.distinct("serverIPAddress", {
      username: user,
    });
    console.log(uniqueIps.length);
    let ipapiCoordinateResponse = [];
    const validIps = [];
    uniqueIps.map((item) => {
      if (item !== "") {
        validIps.push(item);
      }
    });
    const rounds = Math.ceil(uniqueIps.length / 100);
    let i;

    for (i = 0; i < rounds; i++) {
      if (i !== rounds - 1) {
        console.log(`slice(${i * 100}, ${(i + 1) * 100})`);
        await axios
          .post(
            "http://ip-api.com/batch",
            validIps.slice(i * 100, (i + 1) * 100),
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              ipapiCoordinateResponse = ipapiCoordinateResponse.concat(
                response.data
              );
              return response.data;
            }
          });
      } else {
        await axios
          .post("http://ip-api.com/batch", validIps.slice(i * 100), {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((response) => {
            if (response.status === 200) {
              ipapiCoordinateResponse = ipapiCoordinateResponse.concat(
                response.data
              );
              return response.data;
            }
          });
      }
    }

    const ipList = ipapiCoordinateResponse.map((item) => ({
      lat: item.lat,
      long: item.lon,
    }));
    return ipList;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}

export async function deleteAllEntries() {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).catch((err) => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("HAR_ANALYZER");
    const collection = db.collection("entries");
    const status = await collection.remove({});
    return status;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    client.close();
  }
}
