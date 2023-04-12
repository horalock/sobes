import React from 'react';
import './Content.css';
import AnswerModal from '../AnswerModal/AnswerModal';
import i_data from "../../assets/data/interview_data.json";
import { useState } from 'react';

let copyOfData = JSON.parse(JSON.stringify(i_data))
let description
let answer
let answerCode
let dataPath
let questionAmount

function Content(props) {
    const [ex, setEx] = useState(0)
    const [isVisibleAnswerModal, setIsVisibleAnswerModal] = useState(false);
    const [isVisibleAnswerBtn, setIsVisibleAnswerBtn] = useState(true);

    dataPath = copyOfData[props['title']][ex]
    questionAmount = copyOfData[props['title']].length
    if (questionAmount > ex) {
        description = dataPath['description']
        answer = dataPath['answer']
        answerCode = dataPath['answerCode']
    } else {
        description = "Это был последний вопрос"
        answer = null
        answerCode = null
    }

    const handleClick = () => {
        setIsVisibleAnswerModal(!isVisibleAnswerModal);
    }

    function changeEx() {
        setEx(ex + 1)
        if (questionAmount - 1 === ex) {
            setIsVisibleAnswerBtn(!isVisibleAnswerBtn);
            isVisibleAnswerModal ? setIsVisibleAnswerModal(!isVisibleAnswerModal) : setIsVisibleAnswerModal(isVisibleAnswerModal);
        }
    }

    return (
        <>
            <div className='content-area'>
                <h1 className='step-title'>{props.title.toUpperCase()}, вопрос {ex+1}/{questionAmount}</h1>
                <p className='step-description'>{description}</p>
                <div>
                    {
                        isVisibleAnswerBtn && <button onClick={handleClick} className='content-btn show-answer'>Ответ</button>
                    }
                    <button onClick={() => { changeEx() }} className='content-btn next-step'>Дальше</button>
                </div>
                {
                    isVisibleAnswerModal && <AnswerModal
                        question={ex}
                        answer={answer}
                        answerCode={answerCode} />
                }
            </div>
        </>
    )
}

export default Content