const {generate, verify} = require('password-hash');
const {Pool,Client} = require('pg');
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'web',
  password: 'password',
  port: 5432,
});


const getUsers = async (request, response) => {
    const client = await pool.connect();
    try{
      const results = await client.query('SELECT * FROM users');
      response.status(200).json(results.rows);
    }catch(e){
      console.log(e);
    }finally{
      client.release();
    }
  }

const getUserByEmail = async (request, response) => {
    const email = request.params.email;
    const client = await pool.connect();
    try{
      
      const results = await client.query('SELECT username FROM users WHERE username = $1',[email]);
      response.status(200).json(results.rows);
    }catch(e){
      console.log(e);
    }finally{
      client.release();
    }
  
}  



const createUser = async (request, response) => {
    const { email, password, isadmin } = request.body;
    const pwd = generate(password);
    const client = await pool.connect();
    try{
        
        const results = await client.query('INSERT INTO users (username, pwd, isadmin ) VALUES ($1,$2,$3)', [email, pwd, isadmin]);
        response.status(201).send(`Employee added with ID: ${results}`);
    }catch(e){
        console.log(e);
    }finally{
        client.release();
    }
}


const updateEmployee = async (request, response) => {
  const email = request.params.email;
  const { email , password } = request.body;
  const pwd = generate(password);
  const client = await pool.connect();
  try{
    
    const results = await client.query('UPDATE Users SET email = $1, pwd = $2', [email ,pwd]);
    response.status(200).send(`Employee modified with ID: ${email}`);
  }catch(e){
    console.log(e);
  }finally{
    client.release();
  }
}







module.exports = {
  getUsers,
  createUser,
  getUserByEmail,
  updateEmployee,
  deleteEmployee,
  deleteAllEmployees,

}

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