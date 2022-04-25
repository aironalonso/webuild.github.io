import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: 'gray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50
        }}>
            <Typography component='footer' sx={{
                color: 'lightgray',
                textAlign: 'center'
            }}>
                Copyright &copy; 2022 WeBuild | KodeGO | Batch Frontier | Room 4 | Kiel | Airon | Loraine
            </Typography>
        </Box>
    );
};

export default Footer;