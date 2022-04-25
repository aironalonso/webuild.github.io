import { Box, Stack } from '@mui/material';
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Developers from './components/Developers';
import Features from './components/Features';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Service from './components/Service';

const App = () => {
    return (
        <Box>
            <Stack direction='column'>
                <NavBar />
                <Intro />
                <Features />
                <About />
                <Service />
                <Developers />
                <Contact />
                <Footer />
            </Stack>
        </Box>
    );
};

export default App;