import {generate, verify} from 'password-hash'

export async function checkCreds(username, password){
    console.log(`Hash of ${password} is: ${generate(password)}`)
    //const res = await fetch(`http://localhost:5000/login/${username}`);
    //const match = verify(password,res)    
    //return creds;
}

//export async function register()