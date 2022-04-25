import { Button, Card, CardMedia, Container, CssBaseline, styled } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Intro = () => {
    // const ImageSize = styled(img) ({
    //     backgroundImage: '/images/ffffff.jpg',
    //     height: 540,
    //     width: 480
    // })
    
    return (
        <Box sx={{ backgroundColor: '#3c055e', height: 556 }}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography component='h3' gutterBottom variant='h3' sx={{
                            color: '#fff',
                            fontWeight: 'bolder',
                            marginTop: 8,
                        }}>
                            Web Development Software
                        </Typography>
                        <Typography component='p' gutterBottom variant='p'>
                            {/* Content here */}
                        </Typography>
                        <Button color='success' variant='contained' sx={{ borderRadius: 20 }}>Read more</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Image here */}
                    </Grid>
                </Grid>
            </Container >
        </Box >
    );
};

export default Intro;