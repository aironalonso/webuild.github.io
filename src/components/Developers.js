import { Avatar, Box, Stack } from '@mui/material';
import React from 'react';

const Developers = () => {
  return (
    <Box sx={{ backgroundColor: '#3c055e', height: 625 }}>
      <Stack direction='row' spacing={14} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
      }}>
        <Avatar 
        alt='Kiel Paderes'
        src='https://placeimg.com/640/480/people'
        sx={{ height: 180, width: 180 }}
        />
        <Avatar 
        alt='Airon Alonso'
        src='https://placeimg.com/640/480/people'
        sx={{ height: 180, width: 180 }}
        />
        <Avatar 
        alt='Loraine Ostan'
        src='https://placeimg.com/640/480/people'
        sx={{ height: 180, width: 180 }}
        />
      </Stack>
    </Box>
  );
};

export default Developers;