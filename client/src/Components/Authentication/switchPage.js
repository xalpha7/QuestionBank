import React, { useState, useEffect } from 'react';
import { Container, Box, Card, CardContent, Typography, Button, adaptV4Theme } from '@mui/material';
import { ThemeProvider, StyledEngineProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Signup from './Signup';
import Navbar from '../Navbar';
import Login from './Login';
import { Switch, Route, useHistory } from "react-router-dom";


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

const SwitchPage = () => {

    const [ page, setPage ] = useState(0);

    const switichingToSignupPage = () => {
        setPage(1);
    }
    const switichingToLoginPage = () => {
        setPage(0);
    }

    if(page===0){
        return ( 
            <Box>
                <Login onChange={(e) => switichingToSignupPage(e)} prop={{ page: page }}/>
            </Box>
         );

    } else if(page===1) {
        return (
            <Box>
                <Signup onChange={(e) => switichingToLoginPage(e)} prop={{ page: page }} />
            </Box>
        );
    }
}
 
export default SwitchPage;