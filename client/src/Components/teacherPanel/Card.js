//Card Section (Connected to Mainbody) Recent Paper Part Section (1st Page)
import React from 'react'
import "./Card.css"

//Import Icons
import StorageIcon from '@mui/icons-material/Storage';
import MoreIcon from '@mui/icons-material/MoreVert';

//Import Image
import doc_image from "./Recent.jpeg"

//Import useHistory from react-router-dom
import { useHistory } from "react-router-dom";

//Create New Form
function Card({name}) {
    const history = useHistory();
    function navigate_to(docname){
        var fname=docname.split(".");
        history.push("/form/" + fname[0])
    }

    return (
        //For doc_card section
        <div className="doc_card" onClick={()=>{
            navigate_to(name)
        }}>

        {/* For doc_card_image */}
             <img src={doc_image} className="doc_card_image"></img>

             {/* For doc_card_content */}
             <div className="doc_card_content">
                <h5 style={{overFlow:"ellipsis"}}>{name ? name : " CSE Question Paper" }</h5>

                {/* For doc_content */}
                <div className="doc_content">
                
                {/* For content_left */}
                    <div className="content_left" style={{fontSize:"12px",color:"grey"}}>
                    <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>   Created on 10 May 2022
                    </div>
                    
                     <MoreIcon style={{color:"grey",fontSize:"16px"}} />
                </div>
             </div>
        </div>
    )
}

export default Card