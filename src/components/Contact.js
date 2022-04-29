import { Box } from '@mui/material';
import React from 'react';
import { useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

const contactInfo = (localStorage.getItem("ContactDetails")) ? JSON.parse(localStorage.getItem("ContactDetails")) : []

const Contact = () => {

  const [contactList, setContactList] = useState(contactInfo)
  const fNameRef = useRef()
  const lNameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const onFormSubmit = (event) => {
    event.preventDefault()
    // setFirstName(fNameRef.current.value)
    // setLastName(lNameRef.current.value)
    // setEmail(emailRef.current.value)
    // setMessage(messageRef.current.value)

    const contactObject = {
      id: Date.now(),
      fName: fNameRef.current.value,
      lName: lNameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    }

    setContactList([...contactList, contactObject])
    localStorage.setItem("ContactDetails", JSON.stringify(contactList))
    console.log(contactList)
    fNameRef.current.value = "";
    lNameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <Box>
      <Stack direction="row" sx={{
        display:"flex",
        flexDirection:{xs:"column",sm:"row"}
      }}>
      <Grid container alignContent="center" justifyContent="center"  sx={{
            backgroundColor: "bisque",
            minHeight:40
          }}>
       
          <Typography variant="h5" component="h5">
            Feel free to contact us for more details.
          </Typography>
        
      </Grid>
      <Grid container sx={{ maxWidth: 300 }} marginRight={2} padding={1}>
          <Grid> 
          <Typography variant="h4" component="h4">
            Contact Form
          </Typography>
          <form onSubmit={onFormSubmit} >
            <Grid item textAlign={"right"}>
              <label>First Name</label>
              <input type="text" name='firstName' ref={fNameRef} />
            </Grid>
            <Grid item textAlign={"right"}>
              <label>Last Name</label>
              <input type="text" name='lastName' ref={lNameRef} />
            </Grid>
            <Grid item textAlign={"right"}>
              <label>Email</label>
              <input type="text" name='email' ref={emailRef} />
            </Grid>
            <Grid item textAlign={"left"}>
              <label>Message:</label>
              <textarea name="message" cols="30" rows="10" ref={messageRef} ></textarea>
            </Grid>
            <Grid item textAlign={"right"}>
              <input type="submit" value='submit' name="submit" />
            </Grid>
          </form>
          </Grid>
      </Grid>
      </Stack>
    </Box>
  )
}

export default Contact;