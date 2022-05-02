import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Card, CardMedia, Container, CssBaseline, Stack, styled } from '@mui/material';
import { Box } from '@mui/system';
import { collapseData } from './collapseData';
import CollapseFunc from './CollapseFunc';


const Features = () => {

  return (
    <Box>
      <Stack direction='column' spacing={{xs: 0, md: 2}} sx={{
        alignItems: 'center',
        display: {xs: 'block', md: 'flex'},
        justifyContent: 'center'
      }}>
        <Typography component='h1' gutterBottom variant='h1' sx={{
          color: '#3c055e',
          fontSize: {xs: 54},
          fontWeight: 'bolder',
          marginTop: 8,
          width: {xs: '100%'},
          textAlign: 'center',
        }}>
          WeBuild!
        </Typography>
        <Stack sx={{
          width: {xs: '100%',md: 720}
        }}>
          {collapseData.map((element, index) => (
            <CollapseFunc title={element.title} key={index} content={element.content} image={element.image} />
          ))}
        </Stack>
      </Stack>


      <Grid container>
        <Grid item xs={12} md={12}>

        </Grid>

      </Grid>
    </Box>
  );
};

export default Features