//3rd part of JS after (Create New Question Paper Section) the (Recent Paper Part) 1st Page

import React,{useState} from 'react'
//import React,{useEffect} from 'react'
import "./Mainbody.css"

//Import Icons
//Taking Icons from https://mui.com/material-ui/getting-started/installation/
import IconButton from '@mui/material/IconButton';
import StorageIcon from '@mui/icons-material/Storage';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

//Import Card from Card.js
import Card from "./Card"

function Mainbody() {
  const [files,setFiles]=useState([])
  return (
    //Recent Paper Section(Mainbody)
    <div className="mainbody">

    {/* Recent Paper Section(Mainbody Top) */}
            <div className="main_top">

            {/* Recent Paper Section(Mainbody Left) */}
              <div className="main_top_left" style={{fontSize:"16px",fontWeight:"500"}}>Recent Question Paper</div>
              
              {/* Recent Paper Section(Mainbody Right) */}
                <div className="main_top_right">
                
                {/* Recent Paper Section(Mainbody Center) */}
                <div className="main_top_center" style={{fontSize:"14px",marginRight:"125px"}}>Owned by anyone <ArrowDropDownIcon/></div>
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

export default Mainbody
