import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Card, CardContent, Typography, Button, adaptV4Theme } from '@mui/material';
import { ThemeProvider, StyledEngineProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import validator from 'validator';
import { alpha, styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

// const CssTextField = styled(TextField)({
//     "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
//         borderColor: "red" //default      
//       },
//     '& label.Mui-focused': {
//         color: 'green',
//     },
//     '& .MuiInput-underline:after': {
//         borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//         '& fieldset': {
//             borderColor: '#00A36C',
//         },
//         '&:hover fieldset': {
//             borderColor: 'yellow',
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: 'green',
//         },
//     },
// });


// const ValidationTextField = styled(TextField)({
//     '& input:valid + fieldset': {
//         borderColor: 'green',
//         borderWidth: 2,
//     },
//     '& input:invalid + fieldset': {
//         borderColor: '',
//         borderWidth: 2,
//     },
//     '& input:valid:focus + fieldset': {
//         borderLeftWidth: 6,
//         padding: '4px !important', // override inline-style
//     },
// });



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

const Login = (props) => {

    const axiosInstance = Axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      });

    // useState for email
    const [email, setEmail] = useState('');
    let history = useHistory();
    // useState for password
    const [password, setPassword] = useState('');

    // useEffect to validate email 
    useEffect(() => {
        if (email === '') {
            document.getElementById('email').innerHTML = "&nbsp;";
        } else if (validator.isEmail(email)) {
            document.getElementById('email').innerHTML = "&nbsp;";
        } else {
            document.getElementById('email').innerHTML = "Invalid email format !";
        }
    }, [email])

    // function to handle login function
    const handleLogin = () => {
        
        axiosInstance.get(`/user/getuserId/${email}`)
            .then((res) => {
                
                const data = {
                    userId: res.data,
                    password: password
                }
                console.log(res.data)
                axiosInstance.post('/user/checkUserCreds', data)
                    .then(res => {
                        if(res.data === true){
                            alert("user validated!")
                        }
                        else if(res.data === false){
                            alert("invalid credentials")
                        }
                    })
            })
    }
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Box display="flex" flexDirection="column">
                    <Box width="90vw" maxwidth="60rem" height="40vh" marginTop="6rem" marginX="2rem">
                        <Box marginLeft="0.7rem">
                            <Typography variant="h4">LOGIN</Typography>
                        </Box>
                        <Box marginX="1rem" display="flex" flexDirection="row" alignItems="center">
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" marginRight="0.5rem">
                                <Typography variant='overline'>New to webapp?</Typography>
                            </Box>
                            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" marginLeft="0.5rem">
                                <Button variant="text" onClick={() => { props.onChange(1) }}>
                                    <Typography variant="overline" style={{ color: "#069A8E" }}>Signup</Typography>
                                </Button>
                            </Box>
                        </Box>
                        <Box width="70%" maxWidth="50rem" marginY="3rem">

                            <form >
                                <Box display="flex" flexDirection="" justifyContent="center" alignItems="center" paddingY="1rem">
                                    <Box display='flex' flexDirection='column' justifyContent='flex-start' marginTop="1rem" width="100%" padding="1rem">

                                        <label id="email" className="validator-label" style={{ marginBottom: 10 }}>&nbsp;</label>

                                        <TextField
                                            label={<Typography variant="overline" >Email</Typography>}
                                            variant="outlined"
                                            value={email}
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
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        <label id="email" className="validator-label" style={{ marginBottom: 10 }}>&nbsp;</label>

                                        <TextField
                                            label={<Typography variant="overline" >Password</Typography>}
                                            variant="outlined"
                                            value={password}
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
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Box>
                                </Box>
                            </form>

                            <Box display='flex' flexDirection="row" justifyContent='flex-start' paddingX="1rem" width="70%" >
                                <Button variant="contained" color="primary" className="buttonwide" type='submit' onClick={handleLogin}   >Login</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default Login;