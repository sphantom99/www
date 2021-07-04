const axios = require('axios');
const bcrypt = require("bcrypt"); // require bcrypt

export default function verifyUser(username, password) {
  const saltRounds = 10; //  Data processing speed
  const pwdHashed = axios.post("http://localhost:3001/getPwdHashed", {
    username: "username",
    password: "password",
  });
  bcrypt.hash(password, saltRounds, function (err, hash) {
    // Salt + Hash
    bcrypt.compare(pwdHashed, hash, function (err, result) {
      // Compare
      // if passwords match
      if (result) {
           console.log("It matches!");
        return true;
      }
      // if passwords do not match
      else {
        console.log("Invalid password!");
        return false;
      }
    });
  });
}
