//3rd part of JS after (Header) the (Question Paper to Review) 1st Page

import React,{useState} from 'react'
//import React,{useEffect} from 'react'
import "./template1.css"

//Import Icons
//Taking Icons from https://mui.com/material-ui/getting-started/installation/
import IconButton from '@mui/material/IconButton';
import StorageIcon from '@mui/icons-material/Storage';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

//Import Card from Card.js
import Card from "./Card"

function Template1() {
  const [files]=useState([])
  return (
    //Recent Paper Section(Mainbody)
    <div className="mainbody1">

    {/* Recent Paper Section(Mainbody Top) */}
            <div className="main_top1">

            {/* Recent Paper Section(Mainbody Left) */}
              <div className="main_top_left1" style={{fontSize:"16px",fontWeight:"500"}}>Question Paper to Review</div>
              
              {/* Recent Paper Section(Mainbody Right) */}
                <div className="main_top_right1">
                
                {/* Recent Paper Section(Mainbody Center) */}
                <div className="main_top_center1" style={{fontSize:"14px",marginRight:"125px"}}>Owned by Reviewer <ArrowDropDownIcon/></div>
                    <IconButton ><StorageIcon style={{fontSize: '16px',color:"black"}}/></ IconButton>
                    <IconButton ><FolderOpenIcon style={{fontSize: '16px',color:"black"}}/></ IconButton>
                </div>
            </div>
            
            {/* Recent Paper Section(Mainbody Docs) */}
            {/* Use Card from Card.js */}
            <div className="main_docs">
            {
                    files.map((ele)=>(
                        <Card name={ele}/>
                    ))            
                 }
                 <Card />   
            </div>
        </div>
  )
}

export default Template1
