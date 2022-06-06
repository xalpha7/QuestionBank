//1st part of JS the Header Part(1st Page)

// Package Installation
//npm install @mui/material
//npm install @mui/icons-material

import React from 'react'
import "./Header.css"

//Import Icons
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//Picture Import
import formimage from "./QPaper.png"
import { Box, Button } from '@mui/material';
import { logout, rmrole } from '../../app/actions';
import { useSelector, useDispatch } from 'react-redux';


function Header() {

  const dispatch = useDispatch();
  return (
    //For Header 
    <div className="header">

      {/* For Header Left */}
      <div className="header_info">
        <IconButton><MenuIcon /></IconButton>

        {/* For Header Left Image  */}
        <img src={formimage} style={{ height: '40px', width: "40px" }} className="form_image" />

        {/* For Header Left Text */}
        <div classroom="info">SMART Q_BANK</div>
      </div>

      {/* For Header Middle(Search Bar) */}
      <div className="header_search">
        <IconButton><SearchIcon /></IconButton>

        {/* For Header Middle Text(Search Bar) */}
        <input type="text" placeholder="search" />
      </div>

      {/* For Header Right */}
      <div className="header_right">
        <Box marginTop="1rem" marginLeft="5rem" marginRight="2rem" display="flex" flexDirection="row" justifyContent="center" alignItems="center">

          <Button color="secondary" variant="text" onClick={() => {
            localStorage.setItem("email_local", null);
            localStorage.setItem("role_local", null);
            dispatch(logout());
            dispatch(rmrole());
          }} >
            Logout
          </Button>
        </Box>

        \
      </div>
    </div>
  )
}

export default Header