//5th part after Header Part(2st Page) the Question Form Part(2st Page)
//Connect With create new question

import React,{useState} from 'react'
//import React,{useEffect} from 'react'
import "./Question_form.css"

import Stack from '@mui/material/Stack';

import {TextField,Button, LinearProgress,Typography }from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
//import { maxHeight } from '@mui/system';

const AddButton = styled(Button)({
    width:'35vh',
    height:'6vp'
  });
  const SButton = styled(Button)({
    width:'33vh',
    height:'6vh'
  });
  function Question_form(){
    
    const[qList,setqList]=useState([{service:""}
  
  ]);
  console.log(qList.service);
  const handleAddQuestion =()=>{
    setqList([...qList,{service:"A"}])
  };
  const handlequeChange=(e,index)=>{
     const{name,value}=e.target;
     const list = [...qList];
     list[index][name] = value;
     setqList(list);
  };
  const removeQuestion=(index)=>{
   const list = [...qList];
   list.splice(index,1);
   setqList(list);
  };
  function questionsUI(){
    return (
      <>
      
      <Stack style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'10vh'
      }}>

      {qList.map((qform,index)=>(
        <Stack key={index} direction='column' style={{
          marginTop:'3vh'
        }} >

        <Stack  direction='row' spacing={2}>
          <Box style={{
            width:'70vh',
          }}>

          <TextField id="outlined-multiline-flexible"
             label="Write Your Question Here"
             multiline
             
             onChange={(e)=>handlequeChange(e,index)}
             rows={1.6}
             value = {qform.service.value}
             fullWidth='true'
             ></TextField>
          </Box>
             {qList.length>1 && <Button  onClick={removeQuestion} variant="outlined" 
             
             startIcon={<DeleteIcon />}>
           Delete
         </Button>}
        </Stack>
        <Stack direction ='row' spacing ={2} style={{
          marginTop:'3vh'
        }} >
          {qList.length-1===index &&<AddButton onClick={handleAddQuestion} >Add More</AddButton>
  }
  {qList.length-1===index && <SButton  variant="contained" color='success'>Submit</SButton>
  } 
        </Stack>
         {qList.length-1===index && <div
         style={{
           marginTop:'2vh',
           visibility:'hidden',
           width:'70vh',
           alignItems:'center',
           justifyContent:'center'
         }}
         >
          <LinearProgress></LinearProgress>
         </div>}
         <Typography variant='h5'>{qform.service.value}</Typography>
               
          
        </Stack>
      ))} 
             </Stack>
             
  
      </>
    );
        }
        return (
          <div>
          {/* Subject Name Top Section */}
          <div className="Question_Form">
              <br></br>
      
          {/* Subject Name Section */}
              <div className="section">
      
          {/* Subject Name Section(Question Title) */}
              <div className="question_title_section">
      
          {/* Subject Name Section(Question Top) */}
                  <div className="question_form_top">
                      <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="Subject Name"></input>
                      <input type="text" className="question_form_top_desc" style={{color:"Form Description"}} placeholder="Department"></input>
                  </div>
                  </div>
      
                {questionsUI()}

                  </div>
              </div>
          </div>
        );

}
export default Question_form;