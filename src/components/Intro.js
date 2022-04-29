import { Avatar, Button, Card, CardMedia, Container, Stack, styled, } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import "./intro.css";

const Intro = () => {
    return (
        <Box sx={{
            backgroundColor: '#3c055e',
            height: 556
        }}>
            <Container>
                <Stack direction='row' sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 2, md: 12 },
                    marginTop: { xs: 4, md: 8 },
                }}>
                    {/* Left side */}
                    <Stack direction='column' sx={{
                        borderLeft: '12px solid purple',
                        mt: { xs: 6, md: 0 },
                        pl: { xs: 2, md: 8 },
                        width: { xs: '100%', md: '50%' }
                    }}>
                        <Typography component='h3' gutterBottom variant='h3' sx={{
                            color: '#fff',
                            fontSize: { xs: 44, md: 70 },
                            fontWeight: 'bolder',
                        }}>
                            Web Development Services
                        </Typography>
                        <Typography component='p' gutterBottom variant='h6' sx={{
                            color: '#fff',
                            fontWeight: 'lighter',
                            pl: 2,
                            width: { xs: '100%', md: '60%' }
                        }}>
                            {/* Content here */}
                            Start your Coding Experience with us!
                            <br />
                            Learn now and build later!
                            
                            {/* We are currently working hard on something
                            <br />
                            We'll be here anytime, so message us ! */}
                        </Typography>
                        <Button color='success' variant='contained' sx={{
                            borderRadius: 20,
                            mt: 1,
                            width: { xs: '100%', md: '30%' }
                        }}>
                            Read more
                        </Button>
                    </Stack>

                    {/* Right side */}
                    <Stack sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Image here */}
                        <Avatar
                            alt='computer languages'
                            src='/images/ffffff.jpg'
                            sx={{
                                borderRadius: 0,
                                height: { xs: 180, md: 420 },
                                width: { xs: 180, md: 400 }
                            }}
                        />
                    </Stack>
                </Stack>
            </Container >
        </Box >
    );
};

export default Intro;