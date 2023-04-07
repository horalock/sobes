import React from 'react';
import './Content.css';
import AnswerModal from '../AnswerModal/AnswerModal';
import data from "../../assets/data/steps.json";
import { useState } from 'react';

let localCopyData = JSON.parse(JSON.stringify(data))
let randomQuestion = randInt(0, localCopyData['ex'].length - 1)
console.log(randomQuestion)

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Content() {
    const [ex, setEx] = useState(randomQuestion)
    const [isVisible, setIsVisible] = useState(false);

    let questionAmount = localCopyData['ex'].length
    let title = localCopyData["ex"][ex]['title']
    let description = localCopyData["ex"][ex]['description']
    let answer = localCopyData["ex"][ex]['answer']
    let answerCode = localCopyData["ex"][ex]['answerCode']


    const handleClick = () => {
        setIsVisible(!isVisible);
    }


    questionAmount = localCopyData['ex'].length
    console.log("вопросов:", questionAmount)
    console.log("текущий", ex)
    console.log("список", localCopyData['ex'])
    function changeEx() {
        localCopyData['ex'].splice(randomQuestion, 1)
        randomQuestion = randInt(0, localCopyData['ex'].length - 1)
        setEx(randomQuestion)

    }

    return (
        <>
            <div className='content-area'>
                <h1 className='step-title'>{(questionAmount > 0) ? title : "Конец"}</h1>
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