import { Box, Stack } from '@mui/material';
import React from 'react';
import About from './components/about/About';
import Contact from './components/Contact';
import Developers from './components/Developers';
import Features from './components/features/Features';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Service from './components/service/Service';

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