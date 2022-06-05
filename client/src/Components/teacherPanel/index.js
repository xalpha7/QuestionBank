// The MIT License (MIT)

// Copyright (c) 2014 Call-Em-All

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import React from 'react';
import "./App.css";

//Import Files
//For 1st Page(Dashboard Page)
//For Header Part
import Header from "./Header";
//For Create Question Paper 
import Template from "./Template";
//For Recent Paper
import Mainbody from "./Mainbody";

//For Need to Checked Question Paper 
import Template1 from "./Template1";
//For Checked Review Paper
import Mainbody1 from "./Mainbody1";

//For 2nd Page(The Header Part) Common
import Formheader from "./Formheader";
//For Create a New q_paper
import Question_form from "./Question_form";
//For McQ
import Question_form1 from "./Question_form1";
//For Q&A
import Question_form2 from "./Question_form2";

//Extra
import Question_form3 from "./Question_form3";
import Question_form4 from "./Question_form4";

import Question_form5 from "./Question_form5";
//After submit for review (Notification will pop up)
import SubmitForm from './QuestionPaper';

//The Preview Page after submitting the question for review
//For MCQ
import Preview from './Preview';
//For Description Types
import Preview1 from './Preview1';
//To use React-Router-dom
import{BrowserRouter as Router ,Switch, Route} from "react-router-dom";


const TeacherPanel = () => {
    return ( 
        <div className="app">
    <Router>
      <Switch>

      {/* Connect page */}
      {/* 1st page to Create a New q_paper */}
        <Route path="/form/:id"><Formheader /><Question_form /></Route>
        {/* 1st page to McQ */}
        <Route path="/form1/:id"><Formheader /><Question_form1 /></Route>
        {/* 1st page to Q&A */}
        <Route path="/form2/:id"><Formheader /><Question_form2 /></Route>

        {/* Extra */}
        <Route path="/Question_form3"><Formheader /><Question_form3 /></Route>
        <Route path="/Question_form4"><Formheader /><Question_form4 /></Route>
        
        <Route path="/Question_form5"><Formheader /><Question_form5 /></Route>
        {/* After submit for review (Notification will pop up) 2nd page */}
        <Route path="/submitted"><SubmitForm /></Route>
        
        {/* 2nd page to Preview */}
        <Route path="/Preview"><Preview /></Route>
         {/* 2nd page to Preview1 */}
        <Route path="/Preview1"><Preview1 /></Route>

        {/* For Review Page for teacher */}
        <Route path="/Review">
        <Header />
        <Template1 />
        <Mainbody1 />
        </Route>

        <Route path="/">
        <Header />
        <Template />
        <Mainbody />
        </Route>

        
      </Switch>
    </Router>
    </div>
     );
}
 
export default TeacherPanel;