import React, { PropsWithChildren } from 'react'
import OneQuestion from '../context/dropDown';

interface Props {
    title: string;
    questions: Array<{
        id: number;
        title: string;
        info: string;
    }>;
}

export function FaqSect ({title, questions}: Props) {

    return (
        <div className="faqSec">
            <h2 className="boxTitle">{title}</h2>
            <div className="faqBox">
                {questions.map((question) => (
                    <OneQuestion key={question.id} {...question} />))}
            </div>
        </div>
    )
}