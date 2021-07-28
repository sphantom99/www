/* eslint-disable prefer-destructuring */
import { www } from './dbConfig';

export async function checkCreds(username, password) {
  let client;
  let row;
  try {
    client = await www.connect();
    const result = await client.query(
      `
          select username, passwordhash from users where username = '${username}' and passwordhash = '${password}'
        `,
    );
    row = result.rows[0];
    console.log(row);
  } catch (e) {
    console.trace(e);
    return [];
  } finally {
    if (client) {
      client.release();
    }
  }
  return row;
}

export async function updateLastUploadDate(username) {
  let client;
  let row;
  try {
    client = await www.connect();
    const result = await client.query(
      `
            insert into uploads(username, last_upload_data)
            values ('${username}', to_timestamp(${Date.now()} / 1000.0) )
            returning *
          `,
    );
    row = result.rows[0];
    console.log(row);
  } catch (e) {
    console.trace(e);
    return null;
  } finally {
    if (client) {
      client.release();
    }
  }
  return row;
}

export async function template() {
  let client;
  let row;
  try {
    client = await www.connect();
    const result = await client.query(
      `
            select * from bnames limit 1
          `,
    );
    row = result.rows[0];
    console.log(row);
  } catch (e) {
    console.trace(e);
  } finally {
    if (client) {
      client.release();
    }
  }
  return row;
}

export async function getUserStatisticsCall(username) {
  let client;
  let row;
  try {
    client = await www.connect();
    const result1 = await client.query(
      `
      select count(*)
      from uploads u2 
      where username = ${username}
      group by username 
      `,
    );
    const result2 = await client.query(
      `
      select last_upload_data 
      from uploads u2 
      where username = ${username}
      order by last_upload_data desc
      limit 1
      `,
    );
    row = [result1.rows[0], result2.rows[0]];
    console.log(row);
  } catch (e) {
    console.trace(e);
  } finally {
    if (client) {
      client.release();
    }
  }
  return row;
}
