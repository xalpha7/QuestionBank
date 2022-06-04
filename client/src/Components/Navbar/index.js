import React, { useState, useEffect } from 'react';
import { Container, Box, Card, CardContent, Typography, Button, adaptV4Theme } from '@mui/material';
import { ThemeProvider, StyledEngineProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';


// Theme for component
let theme = createTheme({
    palette: {
        primary: {
            main: '#001A41',
        },

    },
    typography: {

        h5: {

            fontFamily: '"Poppins", sans-serif',
            color: '#ffffff',
            fontSize: '2.5rem',
            fontWeight: 'bold',
        },
        h6: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 'bold',
            color: '#ffffff',
            fontSize: '1.4rem'
        },
        h4: {

            fontFamily: '"Poppins", sans-serif',
            fontSize: '3rem',
            color: '#ffffff',
            fontWeight: 'bold',
        },
        h3: {

            fontFamily: '"Poppins", sans-serif',
            fontSize: '4rem',
            color: '#ffffff',
            fontWeight: 'bold',
        },
        overline: {
            fontWeight: 'bold',
            fontSize: '0.7rem',
        },
        button: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 'bold',
            color: '#ffffff',

        },
    }
});
theme = responsiveFontSizes(theme);

const Navbar = () => {
    return (

        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Box width="100%">
                    <Box marginX="2rem" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="50%" marginTop="3rem">
                        <Box >
                            <Typography variant='h6'> Question Bank </Typography>
                        </Box>
                        <Box display="flex" flexDirection="row" justifyContent="space-between" width="50%" alignItems="center" >
                            <Box  display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                <Typography variant='button'> About </Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                <Typography variant='button'>Contact </Typography>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>

    );
}

export default Navbar;