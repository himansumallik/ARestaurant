import React, { useState } from 'react'
import { Box, Typography, TextField, TextArea} from "@mui/material";
import Button from '@mui/material/Button';
const ContactForm = () => {
  const[name, setName]= useState(" ");
  const[email, setEmail]= useState(" ");
  const[phone, setPhone]= useState(" ");
  const[adress, setAddress]= useState(" ");
  const[message, setMessage]= useState(" ");
  
  const handleChange=(e)=>{
    console.log(e)
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Typography>Name</Typography>
        <TextField required="true"  onChange={(e)=>setName(e.target.value)}></TextField>
      </Box>
      <Box>
        <Typography>Email</Typography>
        <TextField required="true" onChange={(e)=>setEmail(e.target.value)}></TextField>
      </Box>
      <Box>
        <Typography>Phone</Typography>
        <TextField required="true" onChange={(e)=>setPhone(e.target.value)}></TextField>
      </Box>
      <Box>
        <Typography>Address</Typography>
        <TextField required="true" onChange={(e)=>setAddress(e.target.value)}></TextField>
      </Box>
      <Box>
        <Typography>Message</Typography>
        <TextField required="true" onChange={(e)=>setMessage(e.target.value)}></TextField>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Button variant="contained" color="success" onClick={handleChange}>Submit</Button>
      </Box>
    </Box>
  )
}

export default ContactForm
