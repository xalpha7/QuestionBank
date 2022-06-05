//After Succefully Submitted Question Paper Message will be Pop Up

import React from 'react'
import "./user_form.css"

//Import Button
import { Typography } from '@mui/material';


//Submit Form
function SubmitForm() {
    return (
        //Submit Part
        <div className="submit">

        {/* User Form */}
             <div className="user_form">

             {/* User Form Section */}
            <div className="user_form_section">

            {/* User Title Section */}
                <div className="user_title_section">
                    <Typography style={{fontSize:"26px",fontFamily: "'Google Sans','Roboto','Arial','sans-serif'"}} >Question Paper</Typography>
                    <br></br>
                    <Typography style={{fontSize:"13px",fontWeight:"400"}} >Your Question Paper has been Submited.</Typography>
                    <br></br>
<a href="#" style={{fontSize:"13px"}}>Submit Another Question Paper</a>
                </div>
        </div>
        </div>
        </div>
    )
}

export default SubmitForm