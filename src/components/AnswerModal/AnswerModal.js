import React from 'react';
import './AnswerModal.css';

function AnswerModal(props) {

    let answer = props.answer
    let answerCode = props.answerCode
    return (
        <>
            <div className='answer-modal'>
                <div className='answer-text' dangerouslySetInnerHTML={{__html: answer}}></div>
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