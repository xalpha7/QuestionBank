//5th part after Header Part(2st Page) the Question Form Part(2st Page)
//Connect With create new question

//import React,{useState} from 'react'
//import React,{useEffect} from 'react'
import React, { useState, useEffect } from 'react'
import "./Question_form.css"

//Import Material
import Select from '@mui/material/Select';
//import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
//import TextField from '@mui/material/TextField';

//Import Icons
//import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ShortTextIcon from '@mui/icons-material/ShortText';
//import SubjectIcon from '@mui/icons-material/Subject';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsTrash } from "react-icons/bs"
//import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import {BsFileText} from "react-icons/bs"
//import {FcRightUp} from "react-icons/fc"
import CloseIcon from '@mui/icons-material/Close';
//import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
//Sample Question for Question Form
function Question_form4() {

  const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const dispatch = useDispatch();

  const [questions, setQuestions] = useState([]);


  let { id } = useParams();

  console.log(id)
  useEffect(() => {
    var newQuestion = { questionText: "Question", questionType: "radio", options: [{ optionText: "Option 1" }], open: true }

    setQuestions([...questions, newQuestion])

  }, [])

  const history = useHistory();
  //Change Question
  function changeQuestion(text, i) {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion)
  }

  const user = useSelector(state => state.users);

  function commitToDB() {

    // console.log(questions);
    
    axiosInstance.get(`/user/getuserId/${user}`)
            .then((res) => {
                const userId = res.data;
                const data = {
                  userId: userId,
                  questionSet: questions
                }
                axiosInstance.post('/contributor/addQuestionSet', data)
                  .then(res => {
                    alert("question paper sent to Review");
                    history.push('/');
                  })
            })
  }

  //Change Question Option
  //i is the Question Option Index
  //j is the Option Index
  function changeOptionValue(text, i, j) {
    var optionQuestion = [...questions];
    optionQuestion[i].options[j].optionText = text;
    setQuestions(optionQuestion);
    console.log(optionQuestion)
  }

  //Add Type
  function addQuestionType(i, type) {
    let qs = [...questions];
    console.log(type)
    qs[i].questionType = type;
    setQuestions(qs);
  }

  //Add Option Session
  function addOption(i) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({ optionText: "Option " + (optionsOfQuestion[i].options.length + 1) })
    } else {
      console.log("Max  5 options ");
    }
    console.log(optionsOfQuestion);
    setQuestions(optionsOfQuestion)
  }

  // Add More New Question Feild
  function addMoreQuestionField() {
    setQuestions(questions => [...questions, { questionText: "Question", questionType: "radio", options: [{ optionText: "Option 1" }], open: true, required: false }]);
  }

  //Remove Option
  function removeOption(i, j) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length > 1) {
      optionsOfQuestion[i].options.splice(j, 1);
      setQuestions(optionsOfQuestion)
      console.log(i + "__" + j);
    }
  }

  //Copy Question Option
  // function copyQuestion(i){
  //   var newQuestion = qs[i]
  //   setQuestions([...questions, newQuestion])
  // }

  //Delete Question
  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs)
  }

  // function requiredQuestion(i){
  //   var requiredQuestion = [...questions];
  //     requiredQuestion[i].required =  ! requiredQuestion[i].required
  //   console.log( requiredQuestion[i].required+" "+i);
  //   setQuestions(requiredQuestion)
  // }

  // For Question UI
  function questionsUI() {
    return questions.map((ques, i) => (
      <div>
        <Accordion expanded={questions[i].open} className={questions[i].open ? 'add border' : ""}>
          <AccordionSummary aria-controls="penelia-content" id="penelia-header" elevation={1} style={{ width: '100%' }}>
            {questions[i].open ? (

              //For Saved Question Section
              <div className="saved_questions">
                <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: '.1px', lineHeight: '24px', paddingBottom: "8px" }}>
                  {i + 1}. {questions[i].questionText}</Typography>
                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: 'flex', }}>
                      <FormControlLabel style={{ marginLeft: "5px", marginBottom: "5px" }} disabled control={<input type={ques.questionType} color="primary" style={{ marginRight: '3px', }} required={ques.type} />} label={
                        <Typography style={{
                          fontFamily: 'Roboto,Arial,sans-serif',
                          fontSize: '13px',
                          fontWeight: '400',
                          letterSpacing: '.2px',
                          lineHeight: '20px',
                          color: '#202124',
                        }}>
                          {ques.options[j].optionText}
                        </Typography>
                      } />
                    </div>
                  </div>
                ))}
              </div>
            ) : ""}

          </AccordionSummary>
          {/* Question Box */}
          <div className="question_boxes">

            {/* For Add Question */}
            <AccordionDetails className="add_question">

              {/* For Add Question Top */}
              <div className="add_question_top">

                <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e) => { changeQuestion(e.target.value, i) }}></input>
                {/* <CropOriginalIcon style={{color:"#5f6368"}} /> */}
                <Select className="select" style={{ color: "#5f6368", fontSize: "13px" }} >

                  {/* For Multiple Choice */}
                  <MenuItem id="radio" value="Radio" onClick={() => { addQuestionType(i, "radio") }}> <Radio style={{ marginRight: "10px", color: "#70757a" }} checked /> Multiple Choice</MenuItem>

                  {/* For Short Question */}
                  {/* <MenuItem id="checkbox"  value="Checkbox" onClick= {()=>{addQuestionType(i,"checkbox")}}><CheckBoxIcon style={{marginRight:"10px" ,color:"#70757a"}} checked />  Question</MenuItem> */}
                  <MenuItem id="checkbox" value="Checkbox" onClick={() => { addQuestionType(i, "checkbox") }}><ShortTextIcon style={{ marginRight: "10px", color: "#70757a" }} />Short Question</MenuItem>

                  {/* For Short Question */}
                  {/* <MenuItem id="text" value="Text" onClick= {()=>{addQuestionType(i,"text")}}> <ShortTextIcon style={{marginRight:"10px" ,color:"#70757a"}} />  Short Question</MenuItem> */}

                </Select>
              </div>

              {ques.options.map((op, j) => (

                //For add_question_body
                <div className="add_question_body" key={j}>
                  {
                    (ques.questionType !== "text") ?
                      <input type={ques.questionType} style={{ marginRight: "10px" }} /> :
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                  }

                  <div >
                    <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e) => { changeOptionValue(e.target.value, i, j) }}></input>

                  </div>

                  {/* <CropOriginalIcon style={{color:"#5f6368"}}/> */}

                  <IconButton aria-label="delete" onClick={() => { removeOption(i, j) }}><CloseIcon /></IconButton>
                </div>
              ))}
              {ques.options.length < 5 ? (

                //Add Question Body Part
                <div className="add_question_body">
                  <FormControlLabel disabled control={
                    (ques.questionType !== "text") ?
                      <input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
                        style={{ marginLeft: "10px", marginRight: "10px" }} disabled /> :
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                  } label={
                    <div>
                      <input type="text" className="text_input" style={{ fontSize: "13px", width: "60px" }} placeholder="Add other"></input>
                      <Button size="small" onClick={() => { addOption(i) }} style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}>Add More</Button>
                    </div>
                  } />
                </div>
              ) : ""}

              {/* For Question Footer Part */}
              <div className="add_footer">

                {/* For Question Bottom Left */}
                <div className="add_question_bottom_left">
                  <Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: "13px", fontWeight: "600" }}></Button>
                  {/* <FcRightUp style={{border:"2px solid #4285f4", padding:"2px",marginRight:"8px"}} /> Answer key</Button>   */}
                </div>

                {/* For Question Bottom (Icon) */}
                <div className="add_question_bottom">
                  {/* For Copy Part */}
                  {/* <IconButton aria-label="Copy" onClick={()=>{copyQuestion(i)}}> <FilterNoneIcon/></IconButton> */}
                  {/* For Question Edit the add button */}
                  <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit" />
                  {/* For Delete Part */}
                  <IconButton aria-label="delete" onClick={() => { deleteQuestion(i) }}><BsTrash /></IconButton>
                  {/* <span style={{color:"#5f6368",fontSize:"13px"}}>Saved </span> 
                              <Switch name="checkedA" color="primary" checked={ques.required} onClick={()=>{requiredQuestion(i)}}/>     */}

                </div>
              </div>
            </AccordionDetails>

            {/* For Question Edit the add button */}
            {/* <div className="question_edit">
                          <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit"/>
                      </div> */}
          </div>
        </Accordion>
      </div>
    )
    )
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
              <input type="text" className="question_form_top_name" style={{ color: "black" }} placeholder="Subject Name"></input>
              <input type="text" className="question_form_top_desc" style={{ color: "Form Description" }} placeholder="Department"></input>
            </div>
          </div>

          {questionsUI()}

          {/* Subject Name Buttom Section(Save Button) */}
          <div className="save_form">
            <Button variant="contained" color="primary" onClick={commitToDB} style={{ fontSize: "14px" }}>Submit for review</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question_form4;