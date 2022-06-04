import React, { useState, useEffect } from 'react';
import { Container, Grid, Checkbox, Box, TextField, Card, CardContent, Typography, Button, adaptV4Theme } from '@mui/material';
import { ThemeProvider, StyledEngineProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import validator from 'validator';
import './signup.css';
import { Route, Switch, Link } from 'react-router-dom';



// Theme for component
let theme = createTheme({
    palette: {
        primary: {
            main: '#00A36C',
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
            // color: '#ffffff',
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
            fontSize: '0.8rem',
            color: '#ffffff',
            fontWeight: 'bold',
        }
    }
});
theme = responsiveFontSizes(theme);

const Signup = (props) => {

    // useState for email
    const [email, setEmail] = useState('');

    // useState for password
    const [password, setPassword] = useState('');

    // useEffect to validate email 
    // useEffect(() => {
    //     if (email === '') {
    //         document.getElementById('email').innerHTML = "&nbsp;s";
    //     } else if (validator.isEmail(email)) {
    //         document.getElementById('email').innerHTML = "&nbsp;";
    //     } else {
    //         document.getElementById('email').innerHTML = "Invalid email format !";
    //     }
    // }, [email])

    // useEffect to handle signup function
    const handleSubmit = () => {

    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Box display="flex" flexDirection="column">
                    <Box width="90vw" maxwidth="60rem" height="40vh" marginTop="6rem" marginX="2rem">
                        <Box marginLeft="0.7rem">
                            <Typography variant="h4">SIGNUP</Typography>
                        </Box>
                        <Box marginX="1rem" display="flex" flexDirection="row" alignItems="center">
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" marginRight="0.5rem">
                                <Typography variant='overline'>Already a member?</Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" marginLeft="0.5rem">
                                <Button variant='text' onClick={() => { props.onChange(0) }}>
                                    <Typography variant="overline" style={{ color: "#069A8E" }}>Login</Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box width="70%" maxWidth="50rem" marginY="3rem">

                            <form onSubmit={e => handleSubmit(e)}>
                                <Box display="flex" flexDirection="" justifyContent="center" alignItems="center" paddingY="1rem">
                                    <Box display='flex' flexDirection='column' justifyContent='flex-start' marginTop="1rem" width="100%" padding="1rem">

                                        <label id="email" className="validator-label" style={{ marginBottom: 10 }}>&nbsp;</label>

                                        <TextField
                                            label={<Typography variant="overline" >Email</Typography>}
                                            variant="outlined"

                                            InputProps={{
                                                style: {
                                                    fontFamily: 'Arial',
                                                    color: 'white',
                                                    border: "1px solid #ffffff",
                                                    '&$active': {
                                                        border: "0px",
                                                    },
                                                }
                                            }}
                                            id="validation-outlined-input"
                                        />
                                        <label id="email" className="validator-label" style={{ marginBottom: 10 }}>&nbsp;</label>

                                        <TextField
                                            label={<Typography variant="overline" >Password</Typography>}
                                            variant="outlined"

                                            InputProps={{
                                                style: {
                                                    fontFamily: 'Arial',
                                                    color: 'white',
                                                    border: "1px solid #ffffff",
                                                    '&$active': {
                                                        border: "0px",
                                                    },
                                                }
                                            }}
                                            id="validation-outlined-input"
                                        />
                                    </Box>
                                </Box>
                            </form>

                            <Box display='flex' flexDirection="row" justifyContent='flex-start' paddingX="1rem" width="70%" >
                                <Button variant="contained" color="primary" className="buttonwide" type='submit' >signup</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default Signup; 