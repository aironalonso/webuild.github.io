import { Avatar, Box, Button, FormControl, TextField } from '@mui/material';
import React from 'react';
import { useRef, useState } from 'react';
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
<<<<<<< HEAD
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
=======
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ height: '100%', my: 4, width: '100%' }}>
        {/* Contact left container */}
        <Stack sx={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}>
          <Avatar
            alt='contact image'
            src='/images/Untitled-1-min.jpg'
            variant='square'
            sx={{
              height: 480,
              width: { xs: '100%', md: '88%' }
            }}
          />
        </Stack>

        {/* Contact right container */}
        <Stack sx={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}>
          <Typography align='center' gutterBottom variant='p' sx={{
            width: { xs: '70%', md: '100%' }
          }}>Message us for more details:</Typography>
          <FormControl component='form' fullWidth onSubmit={onFormSubmit} sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '70%'
          }}>
            <TextField
              fullWidth
              defaultValue=''
              id="filled-required"
              label="First Name"
              maxRows={4}
              multiline
              variant="filled"
              inputRef={fNameRef}
              margin='normal'
            />
            <TextField
              fullWidth
              defaultValue=''
              id="filled-required"
              label="Last Name"
              maxRows={4}
              multiline
              variant="filled"
              inputRef={lNameRef}
              margin='normal'
            />
            <TextField
              fullWidth
              defaultValue=''
              id="filled-required"
              label="Email"
              maxRows={4}
              multiline
              required
              variant="filled"
              inputRef={emailRef}
              margin='normal'
            />
            <TextField
              defaultValue=""
              fullWidth
              id="filled-required"
              label="Message"
              multiline
              rows={4}
              variant="filled"
              inputRef={messageRef}
              margin='normal'
            />
            <Button variant='contained' type='submit' sx={{ backgroundColor: '#5E43C5', my: 2 }}>submit</Button>
          </FormControl>
        </Stack>

        {/* <Grid container alignContent="center" justifyContent="center" sx={{
          backgroundColor: "#6bd3ff",
        }}>
          <Typography>
            Feel free to contact us for more details.
          </Typography>
        </Grid>
        <Grid container sx={{ maxWidth: 250 }} marginRight={2} padding={1}>
          <Grid>
            <Typography variant="h5" component="h5">
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
>>>>>>> origin/master
          </Grid>
        </Grid> */}
      </Stack>
    </Box>
  )
}

export default Contact;