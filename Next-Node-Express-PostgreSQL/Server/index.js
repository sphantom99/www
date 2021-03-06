const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');
const app = express();
const port = 2020;
const cors = require('cors');

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
})



app.get('/Users', db.getUsers);
app.post('/Users', db.createUser);
app.get('/Users/:email', db.getUserByEmail);
/*

app.put('/Employee/:id', db.updateEmployee);
app.delete('/Employee/:id', db.deleteEmployee);
app.delete('/Employee',  db.deleteAllEmployees);
*/
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
})
/*
import {generate, verify} from 'password-hash'

export async function checkCreds(username, password){
    console.log(`Hash of ${password} is: ${generate(password)}`)
    //const res = await fetch(`http://localhost:5000/login/${username}`);
    //const match = verify(password,res)    
    //return creds;
}

//export async function register()

1. get password of username
2. create user with hashed password
3. see if user exists

*/