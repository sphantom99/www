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
      
      const results = await client.query('SELECT pwd FROM users WHERE username = $1',[email]);
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


const updateUser = async (request, response) => {
  const email = request.params.email;
  const {password } = request.body;
  const pwd = generate(password);
  const client = await pool.connect();
  try{
    
    const results = await client.query('UPDATE users SET username = $1, pwd = $2', [email ,pwd]);
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
  updateUser,
}
