import { Label } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react';
 function Login() 
 {
  const[userName,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState(false);
  const[Email,setEmail]=useState('')
  const formHandler=(event)=>
 {
    event.preventDefault();
    if(userName.length ===0 && password.length ===0)
    {
      setError(true);
    }
    if(userName && password)
    {
    const loginObj={
      name:userName,
      pwd:password
    }
  
    
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
  }
  }
  return (
    <div>
    <h1>Login page</h1>
    <form onSubmit={formHandler}>
      Username : <input type="text" value={userName} placeholder="Username" onChange={(e)=>setUserName(e.target.value)}/><br/>
      <div >
      {
        error && userName.length ===0?
        <label style={{color:'red'}}>username is required</label> :""}
      </div>
      password :<input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
      <div>
        {
          error && password.length==0?
        <label style={{color :'red'}}>
          password is required
        </label>:""
        }
      </div>
      Email_id:<input type="text" value={Email} placeholder="Email-id"/> <br/>
      <div>
      
       {error && Email.length==0 ? <label style={{color:'red'}}>  Email is required
       </label> : ""}
      </div>
      <button type="submit">Login</button>
    </form>
    </div>
  )
}
export default Login;