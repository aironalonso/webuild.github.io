import { Avatar, Button, Card, CardMedia, Container, Stack, styled, } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import "./intro.css";
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const Intro = () => {
    return (
        <Box sx={{
            backgroundColor: '#3c055e',
            height: { xs: '100%', md: '100%' }
        }}>
            <Stack direction={{ xs: 'column', md: 'row' }} sx={{
                display: 'flex',
                gap: { xs: 2, md: 12 },
                marginTop: { xs: 4, md: 8 },
            }}>
                {/* Left side */}
                <Stack direction='column' sx={{
                    alignItems: { xs: 'center', md: 'flex-start' },
                    borderLeft: '12px solid purple',
                    flex: 1,
                    gap: 6,
                    justifyContent: 'center',
                    mt: { xs: 6, md: 0 },
                    pl: { xs: 2, md: 8 },
                    width: { xs: '100%', md: '50%' }
                }}>
                    <Typography component='h3' gutterBottom variant='h3' sx={{
                        color: '#fff',
                        fontSize: { xs: 44, md: 70 },
                        fontWeight: 'bolder',
                        width: { xs: '90%', md: '100%'}
                    }}>
                        Web Development Services
                    </Typography>
                    <Typography component='p' gutterBottom variant='h6' sx={{
                        color: '#fff',
                        fontWeight: 'lighter',
                        pl: 2,
                        width: { xs: '90%', md: '80%' }
                    }}>
                        {/* Content here */}
                        Start your Coding Experience with us!
                        <br />
                        Learn now and build later!

                        {/* We are currently working hard on something
                            <br />
                            We'll be here anytime, so message us ! */}
                    </Typography>
                    {/* <Button color='secondary' variant='outlined' sx={{
                        backgroundColor: '#0063cc',
                        borderColor: 'none',
                        borderRadius: 20,
                        color: '#fff',
                        mt: 1,
                        width: { xs: '100%', md: '30%' },
                        '&:hover': {
                            backgroundColor: 'none',
                        }
                    }}>
                        Read more
                    </Button> */}

                    <ColorButton variant='contained' sx={{
                        borderRadius: 20,
                        my: {xs: 2, md: 1},
                        width: { xs: '80%', md: '30%' }
                    }}>Read more</ColorButton>
                </Stack>

                {/* Right side */}
                <Stack sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    {/* Image here */}
                    <Avatar
                        alt='computer languages'
                        src='/images/ffffff.jpg'
                        variant='square'
                        sx={{
                            height: { xs: 180, md: 480 },
                            overflow: 'hidden',
                            width: { xs: 180, md: '100%' }
                        }}
                    />
                </Stack>
            </Stack>
        </Box >
    );
};

export default Intro;