import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import "./Signin.css"



function signin() {
  return (
    <Box id="container" >
        <h1 className='head'>Sign In</h1>
    <TextField id="standard-basic" label="Email" variant="standard" type="email" className='input email' color="success" /><br /><br />
    <TextField id="standard-basic" label="Password" variant="standard" type="password" className='input password' /><br /><br />
    <Link to="signup"><Button variant="outlined" className='btn'>Signin</Button></Link>
    </Box>
  )
}

export default signin