import React from 'react'
import { TextField,Box,Button } from '@mui/material'
import './Signup/Signup.css'

function signup() {
  return (
   <Box id="wrap">
     <h1>Sign Up</h1>
    <TextField id="standard-basic" label="Full Name" variant="standard" type="text" /><br /><br />
    <TextField id="standard-basic" label="Email" variant="standard" type="email" /><br /><br />
    <TextField id="standard-basic" label="Password" variant="standard" type="password" /><br /><br />
    <TextField id="standard-basic" label="Re-enter Password" variant="standard" type="email" /><br /><br />
    <Button variant="outlined">SignUp</Button>
   </Box>
  )
}


export default signup