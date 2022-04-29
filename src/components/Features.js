import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Card, CardMedia, Container, CssBaseline, styled } from '@mui/material';
import { Box } from '@mui/system';
import { collapseData } from './collapseData';
import CollapseFunc from './CollapseFunc';


const Features = () => {
  
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography component='h3' gutterBottom variant='h3' sx={{
            color: '#610000',
            fontWeight: 'bolder',
            marginTop: 8,
            textAlign: 'center',
          }}>
            WeBuild!
          </Typography>
        <hr />
        </Grid>
        {collapseData.map((element, index)=>(
         <CollapseFunc title={element.title} key={index} content={element.content} image={element.image}/>
        ))} 
      </Grid>      
    </Box>
  );
};

export default Features