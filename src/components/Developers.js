import { Avatar, Box, Button, Card, CardActions, CardContent, Link, Stack, Typography } from '@mui/material';
import React from 'react';

const Developers = () => {
  return (
    <Box sx={{
      backgroundColor: '#3c055e',
      height: 625
    }}>
      <Stack direction='row' sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 2, md: 12 },
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: { xs: 4, md: 12 },
      }}>
        {/* Dev-Loraine */}
        <Stack direction='column' spacing={4}>
          <Link href='#'>
            <Avatar
              alt='Loraine Ostan'
              src='https://placeimg.com/640/480/people'
              sx={{ height: 180, width: 180 }}
            />
          </Link>
          <Card sx={{
            display: { xs: 'none', md: 'block' },
            height: 200,
            width: 180
          }}>
            <CardContent>
              <Typography component='div' gutterBottom sx={{ fontWeight: 'bolder' }}>
                WEB DEVELOPER
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='medium'>Portfolio</Button>
            </CardActions>
          </Card>
        </Stack>
        {/* Dev-Kiel */}
        <Stack direction='column' spacing={4}>
          <Link href='#'>
            <Avatar
              alt='Kiel Paderes'
              src='https://placeimg.com/640/480/people'
              sx={{ height: 180, width: 180 }}
            />
          </Link>
          <Card sx={{
            display: { xs: 'none', md: 'block' },
            height: 200,
            width: 180
          }}>
            <CardContent>
              <Typography component='div' gutterBottom sx={{ fontWeight: 'bolder', textAlign: 'center' }}>
                WEB DEVELOPER
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='medium'>Portfolio</Button>
            </CardActions>
          </Card>
        </Stack>
        {/* Dev-Airon */}
        <Stack direction='column' spacing={4}>
          <Link href='#'>
            <Avatar
              alt='Airon Alonso'
              src='/images/274863197_683444712852527_8209479579431796262_n.jpg'
              sx={{ height: 180, width: 180 }}
            />
          </Link>
          <Card sx={{
            display: { xs: 'none', md: 'block' },
            height: 200,
            width: 180
          }}>
            <CardContent>
              <Typography component='div' gutterBottom sx={{ fontWeight: 'bolder', textAlign: 'center' }}>
                WEB DEVELOPER
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='medium'>Portfolio</Button>
            </CardActions>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Developers;