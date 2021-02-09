import React from 'react';
import './Login.css'

export const Login = () => {
    return (
       <div className = "wrapper">
           <h1>Welcome To ADG Coding Portal!</h1>
           <p>Please fill in the following details to get started.</p><br></br>       
           <div className = "username">
           <label>Username</label><br></br>
           <input type= "text"
            placeholder= "Username"/> 
            </div>
            <div className = "pass">
            <label>Password</label><br></br>
            <input type= "password"
            placholder = "Password"/>
            </div>
        </div>
    )
}
export default Login;