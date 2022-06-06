import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';
import {Box,Stack,Typography} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Avatar from '@mui/material/Avatar';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
//To use React-Router-dom
import{Switch, Route,Link,BrowserRouter} from "react-router-dom";
import {IconButton} from '@mui/material';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { logout, rmrole } from '../../app/actions';
import { useSelector, useDispatch } from 'react-redux';

function createData(q_name, creation_date, created_by) {
    return { q_name, creation_date, created_by };
  }
  const rows = [
    createData('Economics_1', '17.5.2022' , 'Rituparna Chatterjee'),
    createData('Introduction To electronics', '17.5.2022', 'Nisarga Chand'),
    createData('Programming in Java', '17.5.2022', 'Bibhas Das'),
    createData('Management 1', '17.5.2022', 'Mainak Chatterjee'),
    createData('Medical Electronics', '17.5.2022', 'Mayukh Sadhukhan'),
  ];

function MainPage() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const dispatch = useDispatch();

  return (
    <div className="mobile"  >
  
    <Box height='10vh' className='Nav' 
        style={{
          backgroundColor:'#354259',
          border:'1px dashed border',
          width:'100%',
          paddingTop:'2.5vh'
        }}
        >
            <Stack direction='row'  style={{
              width:'100%',
              alignItems:'start',
              justifyContent:'space-evenly',
               }}>
                 <IconButton color="primary" aria-label="upload picture" component="span">
    <DensityMediumIcon ></DensityMediumIcon>
    <div style={{
      marginLeft:'50px',
      marginRight:'50px'
    
      }}><Typography variant='h5' style = {{
      color:'#FFF2F2'
      
    }} >Reviews</Typography></div>
  </IconButton>
  <div 
  variant='outlined'
  color='error'
  id="demo-positioned-button"
  aria-controls={open ? 'demo-positioned-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick} 
  style = {{
  }}><Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar></div>
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
      backgroundColor:'#F2EBE9',
      height:'100vh',
      padding:'2.5vh'
    }}>
      <div>
        <Typography variant='h5'>Welcome To Review Dashboard</Typography>
      </div>
      <div style={{
          marginTop:'5vh'
        }}><Button variant='outlined'><Typography  variant='subtitle2' style={{
          color:'#413F42'
        }} >View All Question Paper</Typography></Button></div>
        <div style={{
          marginTop:'3vh'
        }} >
          <Typography variant='subtitle2'>Recent Questions</Typography>
        </div>
        <div  style={{
          marginTop:'3vh',
          alignItems:'center',
          justifyContent:'center'
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
        <Button variant='contained' color='success' style={{
          marginTop:'3vh',
          width:'100%'
        }} ><Link 
        style={{
            textDecoration:'none',
            color:'#fff'
        }}
        to='./review_paper'><Typography>Review Questions</Typography></Link></Button>
       
    </div>
    </div>
  )
}

export default MainPage