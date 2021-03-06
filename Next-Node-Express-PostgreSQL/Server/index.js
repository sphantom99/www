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
app.put('/Users/:email', db.updateUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
})
