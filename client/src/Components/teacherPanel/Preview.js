//The Preview Page after submitting the question for review
//For MCQ
import React from 'react'

// Import CSS
import "./Preview.css"
import "./Question_form.css"

function Preview() {
    function questionsUI()
    {
        //CSS part from Preview.css 
        //For saved question part
        return <div className="saved_questions">
        {/* For question part */}
            <div className='questions'>
            {/* For 1st one */}
                <h5> 1. HTML stands for -</h5>
                {/* For option  */}
                <div className='option1'>
                {/* For option container */}
                <div className='options-container'>
                <h5> a. HighText Machine Language</h5>
                <h5> b. HyperText and links Markup Language</h5>
                </div>
                <div className='options-container'>
                <h5> c. HyperText Markup Language</h5>
                <h5> d. None of these</h5>
                </div>
                </div>
                </div>
            {/* For 2nd one */}
                <div className='questions'>
                <h5> 2. The correct sequence of HTML tags for starting a webpage is -</h5>
                <div className='option1'>
                <div className='options-container'>
                <h5> a. Head, Title, HTML, body</h5>
                <h5> b. HTML, Body, Title, Head</h5>
                </div>
                <div className='options-container'>
                <h5> d. HTML, Head, Title, Body</h5>
                <h5> d. HTML, Head, Title, Body</h5>
                </div>
                </div>
                </div>
            {/* For 3rd one */}
                <div className='questions'>
                <h5> 3. Which of the following element is responsible for making the text bold in HTML?</h5>
                <div className='option1'>
                <div className='options-container'>
                <h5> a. class</h5>
                <h5> b. id</h5>
                </div>
                <div className='options-container'>
                <h5> c. type</h5>
                <h5> d. None of the above</h5>
                </div>
                </div>
                </div>
            {/* For 4th one */}
                <div className='questions'>
                <h5> 4. What are the types of unordered or bulleted list in HTML?</h5>
                <div className='option1'>
                <div className='options-container'>
                <h5> a. disc, square, triangle</h5>
                <h5> b. polygon, triangle, circle</h5>
                </div>
                <div className='options-container'>
                <h5> c. disc, circle, square</h5>
                <h5> d. All of the above</h5>
                </div>
                </div>
                </div>
            {/* For 5th one */}
                <div className='questions'>
                <h5> 5. Which of the following HTML attribute is used to define inline styles?</h5>
                <div className='option1'>
                <div className='options-container'>
                <h5> a. style</h5>
                <h5> b. type</h5>
                </div>
                <div className='options-container'>
                <h5> c. class</h5>
                <h5> d. None of the above</h5>
                </div>
                </div>
                </div>

        </div>
    }
   //CSS part from Question_form.css 
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
            <div className="question_form_top_name">
                <h4> CSE Question Paper</h4>
            </div>
                {/* <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="Subject Name"></input>
                <input type="text" className="question_form_top_desc" style={{color:"Form Description"}} placeholder="Department"></input> */}
            </div>
            </div>
            {questionsUI()}
            </div>
            </div>
    </div>
  )
}

export default Preview