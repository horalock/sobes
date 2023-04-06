import React from 'react';
import './Content.css';
import AnswerModal from '../AnswerModal/AnswerModal';
import data from "../../assets/data/steps.json";
import { useState } from 'react';

function Content() {
    const [ex, setEx] = useState(0)
    const [isVisible, setIsVisible] = useState(false);

    let title = (data["ex"].length > ex) ? data["ex"][ex]['title'] : "Null"
    let description = (data["ex"].length > ex) ? data["ex"][ex]['description'] : "Null"

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    function changeEx() {
        setEx(randInt(0, data['ex'].length - 1))
    }

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>
            <div className='content-area'>
                <h1 className='step-title'>{title}</h1>
                <p className='step-description'>{description}</p>
                <div>
                    <button onClick={handleClick} className='content-btn show-answer'>Ответ</button>
                    <button onClick={changeEx} className='content-btn next-step'>Следующий</button>
                </div>
                {isVisible && <AnswerModal question={ex}/>}
            </div>
        </>
    )
}

export default Content