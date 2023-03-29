import React, { useEffect,useState  } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useRef } from 'react';
import "./Signin.css"



function signin() {
 const emailRef=useRef()
 const passRef=useRef()
  

 
 async function loginUser(){
    let user={
       email: emailRef.current.value,
        password:passRef.current.value
      }
    let response=await axios.post("http://localhost:5000/login",user)
   console.log(response.data)

   if(response.data.success==true){
alert("login")
   }else{
    alert("error")
   }

  }

  return (
    <Box id="container" >
        <h1 className='head'>Sign In</h1>
    <TextField id="standard-basic" label="Email" variant="standard" type="email" className='input email' color="success" inputRef={emailRef} /><br /><br />
    <TextField id="standard-basic" label="Password" variant="standard" type="password" className='input password' inputRef={passRef}/><br /><br />
  <Button variant="outlined" className='btn' onClick={loginUser}>Signin</Button>
    </Box>
  )
}

export default signin