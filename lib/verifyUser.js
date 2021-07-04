const axios = require('axios');
const bcrypt = require('bcrypt'); // require bcrypt

export default function verifyUser(username, password) {
  const saltRounds = 10; //  Data processing speed
  const pwdHashed = axios.post('http://localhost:3001/getPwdHashed', {
    username: 'username',
    password: 'password',
  });
  bcrypt.hash(password, saltRounds, (err, hash) => {
    // Salt + Hash
    bcrypt.compare(pwdHashed, hash, (result) => {
      // Compare
      // if passwords match
      if (result) {
        // eslint-disable-next-line no-console
        console.log('It matches!');
        return true;
      }
      // if passwords do not match
      // eslint-disable-next-line no-console
      console.log('Invalid password!');
      return false;
    });
  });
}
