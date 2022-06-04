import React, { useState, useEffect } from 'react';
import { Container, Box, Card, CardContent, Typography, Button, adaptV4Theme } from '@mui/material';
import { ThemeProvider, StyledEngineProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Signup from './Signup';
import Navbar from '../Navbar';
import Login from './Login';
import { Switch, Route, useHistory } from "react-router-dom";
import SwitchPage from './switchPage';


// Theme for component
let theme = createTheme({
    palette: {
        primary: {
            main: '#001A41',
        },

    },
    typography: {

        h5: {
            margin: '0.8rem',
            fontFamily: '"Poppins", sans-serif',
            color: '#ffffff',
            fontSize: '2.5rem',
            fontWeight: 'bold',
        },
        h6: {
            margin: '0.8rem',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 'bold',
            // color: '#ffffff',
            fontSize: '1.4rem'
        },
        h4: {
            margin: '0.8rem',
            fontFamily: '"Poppins", sans-serif',
            fontSize: '3rem',
            color: '#ffffff',
            fontWeight: 'bold',
        },
        h3: {
            margin: '0.8rem',
            fontFamily: '"Poppins", sans-serif',
            fontSize: '4rem',
            color: '#ffffff',
            fontWeight: 'bold',
        },
        overline: {
            fontWeight: 'bold',
            fontSize: '0.7rem',
        }
    }
});
theme = responsiveFontSizes(theme);

const Authentication = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Box className="auth-container" >
                    <Box className="auth-inner-container">
                        <Box width="100%">
                            <Navbar />
                          <SwitchPage />
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>

    );
}

export default Authentication;