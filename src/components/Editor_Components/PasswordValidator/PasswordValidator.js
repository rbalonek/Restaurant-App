import React, { useState } from 'react';
import { Redirect } from "react-router-dom"
import './PasswordValidator.css';


const confirm = (e, password, confirmPassword, updateConfirmation) => {e.preventDefault()
  updateConfirmation(password === confirmPassword ? "Valid!" : "Passwords don't match!")
};


function PasswordValidator() {
  
  const [password, updatePassword] = useState('')
  const [confirmPassword, updateConfirmPassword] = useState('')
  const [confirmation, updateConfirmation] = useState("")
 
  if (confirmation === "Valid!"){
    return <Redirect to="/EditorMain"/>
  }


  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit= {(e) => confirm(e, password, confirmPassword, updateConfirmation)} >
      <input
        type="email"
        placeholder="Email"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          updatePassword(e.target.value);
          }} 
          // minlength = "7"
          // required
      />
      <input
        type="passwordConfirm"
        placeholder="Confirm Password"
        onChange={(e) => {
          updateConfirmPassword(e.target.value);
        }}
      />
      <input
        type="Submit"
        value="Submit"
      />
        <h3>{confirmation}</h3>
      </form>

      
      
          </div>
      
        
    
  );
}

export default PasswordValidator;
