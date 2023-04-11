import React from 'react';
import './Content.css';
import AnswerModal from '../AnswerModal/AnswerModal';
import data from "../../assets/data/steps.json";
import { useState } from 'react';

let localCopyData = JSON.parse(JSON.stringify(data))

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Content(props) {
    const [ex, setEx] = useState(0)
    const [isVisible, setIsVisible] = useState(false);

    let questionAmount = localCopyData['ex'].length
    let description = localCopyData["ex"][ex]['description']
    let answer = localCopyData["ex"][ex]['answer']
    let answerCode = localCopyData["ex"][ex]['answerCode']


    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    function changeEx() {
        setEx(randInt(0, localCopyData['ex'].length - 1))
    }

    return (
        <>
            <div className='content-area'>
                <h1 className='step-title'>{props.title}</h1>
                <p className='step-description'>{(questionAmount > 0) ? description : 'Вопросы закончились'}</p>
                <div>
                    <button onClick={handleClick} className='content-btn show-answer'>Ответ</button>
                    <button onClick={changeEx} className='content-btn next-step'>Дальше</button>
                </div>
                {isVisible && <AnswerModal
                    question={ex}
                    answer={answer}
                    answerCode={answerCode} />}
            </div>
        </>
    )
}

export default Content