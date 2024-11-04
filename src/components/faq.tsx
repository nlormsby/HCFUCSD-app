
import React, { useState } from 'react'
import { FaqSect } from "./faqSect";
import gdata from '../types/genQ';
import rdata from '../types/recruitQ';
import sdata from '../types/studentQ';
import OneQuestion from '../context/dropDown';

//to edit the questions and answer go to types and edit the three files there

export const FAQ = () => {
    const [gquestions, setGQuestions] = useState(gdata);
    const [rquestions, setRQuestions] = useState(rdata);
    const [squestions, setSQuestions] = useState(sdata);

    return (
        <div id="faq">
            <div id="faqTitle">
                <h1>Frequently Asked Questions</h1>
                <hr />
            </div>
            <div id="faqBody">
                <FaqSect title="General" questions={gquestions} />
                
            </div>
            
        </div>
    );
};