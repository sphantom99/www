import {verify} from 'password-hash'

export async function checkCreds(username, password){
    const res = await fetch(`http://localhost:5000/login/${username}`);
    const match = verify(password,res)    
    return creds;
}