//4th part of JS the Question Form Header Part(2st Page)

import React from 'react';
import "./Formheader.css";

//Import Image
import form_image from "./QPaper.png";

//Import Icons
import SettingsIcon from '@mui/icons-material/Settings';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import IconButton from '@mui/material/IconButton';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Formheader() {
  return (
      //Question Form Header Session
      <div className="form_header">
      
      {/* Question Form Header(Left) */}
          <div className="form_header_left">
              <img src={form_image} style={{height:"45px",width:"40px"}}/>
              <input type="text" placeholder="Untitled Paper" className="form_name" ></input>
              <FolderOpenIcon className="form_header_icon" style={{ marginRight:"10px"}}></FolderOpenIcon>
              <StarBorderIcon className="form_header_icon" style={{ marginRight:"10px"}}></StarBorderIcon>
              <span style={{fontSize:"12px",fontWeight:"600"}}>All Changes Saved</span>
          </div>

          {/* Question Form Header(Right) */}
          <div className="form_header_right">
          <IconButton><VisibilityOutlinedIcon className="form_header_icon" /></IconButton>
          <IconButton><SettingsIcon className="form_header_icon" /></IconButton>

          {/* Question Form Header(Right) Submit Button */}
          <Button variant="contained" color="primary" href="acontained-buttons">Submit for Review</Button>

          {/* Question Form Header(Right) */}
          <IconButton><MoreIcon className="form_header_icon" /></IconButton>
          <IconButton><AccountCircle className="form_header_icon" /></IconButton>
      </div>
      </div>
  )
}

export default Formheader