import React from 'react'
import { TextField,Box,Button } from '@mui/material'
import './Signup/Signup.css'
import { useRef } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

function signup() {

  const usernameRef=useRef()
  const emailRef=useRef()
  const pass1Ref=useRef()
  const pass2Ref=useRef()

  const navigate=useNavigate()

  async function signupUser(){
    if(pass1Ref.current.value==pass2Ref.current.value){

      let newuser={
        username:usernameRef.current.value,
        email:emailRef.current.value,
        password:pass1Ref.current.value
  
      }
      let response=await axios.post("http://localhost:5000/user",newuser)
      navigate('/login')
    }else{
      alert("Password Missv  match")
    }
  }
  return (
   <Box id="wrap">
     <h1>Sign Up</h1>
    <TextField id="standard-basic" label="Full Name" variant="standard" type="text" inputRef={usernameRef}/><br /><br />
    <TextField id="standard-basic" label="Email" variant="standard" type="email" inputRef={emailRef}/><br /><br />
    <TextField id="standard-basic" label="Password" variant="standard" type="password" inputRef={pass1Ref}/><br /><br />
    <TextField id="standard-basic" label="Re-enter Password" variant="standard" type="password" inputRef={pass2Ref}/><br /><br />
    <Button variant="outlined" onClick={signupUser}>SignUp</Button>
   </Box>
  )
}


export default signup