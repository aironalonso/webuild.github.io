import { Avatar, Box, Card, CardContent, Link, Stack, Typography } from '@mui/material';
import React from 'react';

// const preventDefault = (event) => event.preventDefault();

const Developers = () => {
  return (
    <Box sx={{
      backgroundColor: '#3c055e',
      height: { xs: '100%', md: '100vh' }
    }}>
      <Stack direction='row' sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 2, md: 12 },
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: { xs: 4, md: 4 },
      }}>

        {/* Dev-Loraine */}
        <Stack direction='column' spacing={2} sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Typography component='h4' variant='h4' sx={{
            color: '#fff',
            fontSize: { xs: 40, md: 44 },
            textAlign: 'center'
          }}>
            Loraine Ostan
          </Typography>
          <Link href='https://loraine282.github.io/Portfolio/myprofile.html?fbclid=IwAR0l23t1uY4VnlZDn9Xn-C6rubD8GcKNb_A2up2bn9QRXzyugRVpcv4AFp8' target='_blank' rel='noreferrer'>
            <Avatar
              alt='Loraine Ostan'
              src='/images/IMG_20220426_222725.jpg'
              sx={{ height: 180, width: 180 }}
            />
          </Link>
          <Card sx={{
            backgroundColor: '#5E43C5',
            color: '#fff',
            display: { xs: 'none', md: 'block' },
            height: 200,
            width: 180
          }}>
            <CardContent sx={{
              alignContent: 'space-evenly',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography component='div' gutterBottom sx={{ fontWeight: 'bolder' }}>
                WEB DEVELOPER
              </Typography>
              <Typography component='div' variant='p' sx={{ fontSize: 16, fontWeight: 200 }}>
                Front-end web developer based in Muntinlupa. I love web designing and building websites.
              </Typography>
            </CardContent>
          </Card>
          <Link href='https://loraine282.github.io/Portfolio/myprofile.html?fbclid=IwAR0l23t1uY4VnlZDn9Xn-C6rubD8GcKNb_A2up2bn9QRXzyugRVpcv4AFp8' target='_blank' rel='noreferrer' underline='none' variant='body1' sx={{ fontWeight: 600 }}>PORTFOLIO</Link>
        </Stack>

        {/* Dev-Kiel */}
        <Stack direction='column' spacing={2} sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Typography component='h4' variant='h4' sx={{
            color: '#fff',
            fontSize: { xs: 40, md: 44 },
            textAlign: 'center'
          }}>
            Kiel Paderes
          </Typography>
          <Link href='https://genepaderesportfolio.netlify.app/' target='_blank' rel='noreferrer'>
            <Avatar
              alt='Kiel Paderes'
              src='/images/gene.jpg'
              sx={{ height: 180, width: 180 }}
            />
          </Link>
          <Card sx={{
            backgroundColor: '#5E43C5',
            color: '#fff',
            display: { xs: 'none', md: 'block' },
            height: 200,
            width: 180
          }}>
            <CardContent>
              <Typography component='div' gutterBottom sx={{ fontWeight: 'bolder', textAlign: 'center' }}>
                WEB DEVELOPER
              </Typography>
              <Typography component='div' variant='p' sx={{ fontSize: 16, fontWeight: 200 }}>
                Front-end developer based in Taguig. I am passionate about programming language and how to apply it in the real world.
              </Typography>
            </CardContent>
          </Card>
          <Link href='https://genepaderesportfolio.netlify.app/' target='_blank' rel='noreferrer' underline='none' variant='body1' sx={{ fontWeight: 600 }}>PORTFOLIO</Link>
        </Stack>

        {/* Dev-Airon */}
        <Stack direction='column' spacing={2} sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Typography component='h4' variant='h4' sx={{
            color: '#fff',
            fontSize: { xs: 40, md: 44 },
            textAlign: 'center'
          }}>
            Airon Alonso
          </Typography>
          <Link href='https://aironalonso.netlify.app/' target='_blank' rel='noreferrer'>
            <Avatar
              alt='Airon Alonso'
              src='/images/274863197_683444712852527_8209479579431796262_n.jpg'
              sx={{ height: 180, width: 180 }}
            />
          </Link>
          <Card sx={{
            backgroundColor: '#5E43C5',
            color: '#fff',
            display: { xs: 'none', md: 'block' },
            height: 200,
            width: 180
          }}>
            <CardContent>
              <Typography component='div' gutterBottom sx={{ fontWeight: 'bolder', textAlign: 'center' }}>
                WEB DEVELOPER
              </Typography>
              <Typography component='div' variant='p' sx={{ fontSize: 16, fontWeight: 200 }}>
                Front-End Developer based on Malolos, Bulacan. To be a programmer is an exciting part in my life.
              </Typography>
              <Typography component='div' variant='p'></Typography>
            </CardContent>
          </Card>
          <Link href='https://aironalonso.netlify.app/' target='_blank' rel='noreferrer' underline='none' variant='body1' sx={{ fontWeight: 600 }}>PORTFOLIO</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Developers;