//2nd part of JS after (Header) the (Create New Question Paper Section)(1st Page)

import React from 'react';
import "./Template.css";

//Import Icons
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';

//Picture Import
import Blank from "./blank.png";
import McQ from "./McQ.png"
import QA from "./QA.jpg"

// Package Installation
//npm install react-uuid
import uuid from "react-uuid";
//npm install react-router-dom
import { useHistory } from 'react-router-dom';

function Template() {
    //To Create Form
    const history = useHistory();
    const createForm = () => {   
        const id_ =uuid();
        console.log(id_)  
        history.push("/form/" + id_)
        history.push("/form1/" + id_)
        history.push("/form2/" + id_)
    }   

  return (
      //Create Question Paper Section(Template Section)
    <div className="template_section">

    {/* Create Question Paper Section(Template Top) */}
    <div className="template_top">

    {/* Create Question Paper Section(Template Left) */}
        <div className="template_left">
        <p style={{color:"#202124",fontSize:"16px"}}>Create Question Paper</p>
            </div>

            {/* Create Question Paper Section(Template Right) */}
        <div className="template_right">

        {/* Create Question Paper Section(Gallary Button) */}
            <div className="gallery_button"></div>
            <IconButton><MoreIcon fontSize="small" /></IconButton>    
        </div>
    </div>

    {/* Create Question Paper Section(Body) */}
    <div className="template_body">

{/* For Click Here For New Q_Paper */}
    {/* Create Question Paper Section(Card) */}
        <div className="card" onClick={createForm}>

        {/* Create Question Paper Section(Card Image) */}
            <img src={Blank} alt="no image" className="card_image"/>
            
            {/* Create Question Paper Section(Card Title) */}
            <p className="card_title">Click Here For New Q_Paper</p>
        </div>

        {/* For McQ Part */}
        <div className="card" onClick={createForm}> 
        <img src={McQ} alt="no image" className="card_image"/>
                  <p className="Card_title">For McQ</p>
              </div>

              {/* For Q&A Part */}
              <div className="card" onClick={createForm}>
              <img src={QA} alt="no image" className="card_image"/>
                  <p className="Card_title">For Q&A</p>
              </div>
    </div>
</div>
  )
}

export default Template