import React from 'react';
import './AnswerModal.css';
import data from "../../assets/data/steps.json";


function AnswerModal(props) {
    let answer = data['ex'][props.question]["answer"]
    let answerCode = data['ex'][props.question]["answerCode"]

    return (
        <>
            <div className='answer-modal'>
                <p className='answer-text'>{answer}</p>
                
                {answerCode && 
                <pre className="language-javascript">
                    <code>
                        {`${answerCode}
                        `}
                    </code>
                </pre>}
            </div>
        </>
    )
}

export default AnswerModal