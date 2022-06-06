// The MIT License (MIT)

// Copyright (c) 2014 Call-Em-All
// om commit


import React from 'react';
import "./App.css";
import { Box, Stack, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//Import Files
//For 1st Page(Dashboard Page)
//For Header Part
import { deepOrange, deepPurple } from '@mui/material/colors';

import Avatar from '@mui/material/Avatar';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
//To use React-Router-dom
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MainPage from './MainPage';
import ReviewPaper from './ReviewPaper';
import { logout, rmrole } from '../../app/actions';
import { useSelector, useDispatch } from 'react-redux';

function createData(q_name, creation_date, created_by) {
  return { q_name, creation_date, created_by };
}

const rows = [
  createData('Economics_1', '17.5.2022', 'Rituparna Chatterjee'),
  createData('Introduction To electronics', '17.5.2022', 'Nisarga Chand'),
  createData('Programming in Java', '17.5.2022', 'Bibhas Das'),
  createData('Management 1', '17.5.2022', 'Mainak Chatterjee'),
  createData('Medical Electronics', '17.5.2022', 'Mayukh Sadhukhan'),
];


function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("logout")
  }
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="moniter">



            {/* Connect page */}
            {/* 1st page to Create a New q_paper */}


            {/* 1st page to McQ */}
            <Box height='10vh' className='Navbar'
              style={{
                backgroundColor: '#354259',
                border: '1px dashed border'

              }}
            >
              <Stack direction='row' style={{
                paddingInline: '20px',
                paddingTop: '2.2vh',
                alignItems: 'center',
                justifyContent: 'space-around'
              }}>
                <div style={{
                  paddingLeft: '10px',

                  paddingRight: '5px',
                }} ><Link><Typography variant='h6' color='#FFF2F2' >Home</Typography></Link>
                </div>
                <div style={{
                  paddingLeft: '10px',
                  paddingRight: '15px'
                }}><Link><Typography variant='h6' color='#FFF2F2' >About</Typography></Link></div>
                <div style={{
                  paddingLeft: '10px',
                  paddingRight: '10px'
                }}><Link><Typography variant='h6' color='#FFF2F2' >Contact</Typography></Link></div>
                <div style={{
                }}><Button variant='outlined'
                  color='error'
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                  </Button></div>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={() => {
                     localStorage.setItem("email_local", null);
                     localStorage.setItem("role_local", null);
                     dispatch(logout());
                     dispatch(rmrole());
                  }}>Logout</MenuItem>
                  

                </Menu>


              </Stack>
            </Box>

            <div style={{
              backgroundColor: '#F2EBE9',
              padding: '5vh',
              height: '100vh'
            }}>
              <div   ><Typography variant='h4' style={{
                color: '#3C2C3E'
              }} >Welcome To Review Dashboard</Typography></div>
              <div style={{
                marginTop: '9vh'
              }}><Button variant='outlined'><Typography variant='subtitle1' style={{
                color: '#413F42'
              }} >View All Question Paper</Typography></Button></div>
              <Stack direction='row'
                style={{
                  alignItems: 'start',
                  marginTop: '3vh',
                  justifyContent: 'space-evenly'
                }}
              >
                <div style={{
                  marginTop: '2vh'
                }} >
                  <Typography variant='subtitle1'>Recent Question Papers</Typography>
                </div>
                <div style={{
                  marginTop: '2vh'
                }} >
                  <Button variant='contained' color='success'  > <Link to='/review_paper' style={{
                    textDecoration: 'none',
                    color: '#fff'
                  }} ><Typography variant='subtitle2' color='success' >Review Questions</Typography></Link></Button>
                </div>
              </Stack>
              <div style={{
                marginTop: '3vh',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Question Name</TableCell>
                        <TableCell align="right">Date Of Creation</TableCell>
                        <TableCell align="right">Created By</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.q_name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.q_name}
                          </TableCell>
                          <TableCell align="right">{row.creation_date}</TableCell>
                          <TableCell align="right">{row.created_by}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>



          </div>
          <div className="tablet">



            {/* Connect page */}
            {/* 1st page to Create a New q_paper */}


            {/* 1st page to McQ */}

            <Box height='10vh' className='Navbar'
              style={{
                backgroundColor: '#354259',
                border: '1px dashed border'

              }}
              
            >
              <Stack direction='row' style={{
                paddingInline: '20px',
                paddingTop: '2.2vh',
                alignItems: 'center',
                justifyContent: 'space-around'
              }}>
                <div style={{
                  paddingLeft: '10px',

                  paddingRight: '5px',
                }} ><Link><Typography variant='h6' color='#FFF2F2' >Home</Typography></Link>
                </div>
                <div style={{
                  paddingLeft: '10px',
                  paddingRight: '15px'
                }}><Link><Typography variant='h6' color='#FFF2F2' >About</Typography></Link></div>
                <div style={{
                  paddingLeft: '10px',
                  paddingRight: '10px'
                }}><Link><Typography variant='h6' color='#FFF2F2' >Contact</Typography></Link></div>
                <div style={{
                }}><Button variant='outlined'
                  color='error'
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                  </Button></div>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={() => {
                     localStorage.setItem("email_local", null);
                     localStorage.setItem("role_local", null);
                     dispatch(logout());
                     dispatch(rmrole());
                  }}>Logout</MenuItem>
                </Menu>


              </Stack>
            </Box>

            <div style={{
              backgroundColor: '#F2EBE9',
              padding: '5vh',
              height: '100vh'
            }}>
              <div   ><Typography variant='h4' style={{
                color: '#3C2C3E'
              }} >Welcome To Review Dashboard</Typography></div>
              <div style={{
                marginTop: '9vh'
              }}><Button variant='outlined'><Typography variant='subtitle1' style={{
                color: '#413F42'
              }} >View All Question Paper</Typography></Button></div>
              <Stack direction='row'
                style={{
                  alignItems: 'start',
                  marginTop: '3vh',
                  justifyContent: 'space-evenly'
                }}
              >
                <div style={{
                  marginTop: '2vh'
                }} >
                  <Typography variant='subtitle1'>Recent Question Papers</Typography>
                </div>
                <div style={{
                  marginTop: '2vh'
                }} >
                  <Button variant='contained' color='success'  > <Link to='/review_paper' style={{
                    textDecoration: 'none',
                    color: '#fff'
                  }} ><Typography variant='subtitle2' color='success' >Review Questions</Typography></Link></Button>
                </div>
              </Stack>
              <div style={{
                marginTop: '3vh',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Question Name</TableCell>
                        <TableCell align="right">Date Of Creation</TableCell>
                        <TableCell align="right">Created By</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.q_name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.q_name}
                          </TableCell>
                          <TableCell align="right">{row.creation_date}</TableCell>
                          <TableCell align="right">{row.created_by}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>

            {/* <Mainbody /> */}


          </div>
          <MainPage></MainPage>
        </Route>
        <Route path='/review_paper' > <ReviewPaper /></Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

