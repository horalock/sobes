import React from 'react';
import './NavBar.css'
import NavItem from './NavItem/NavItem';
// import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <h1>Hey</h1>
            <div className='nav-items'>
                <NavItem text="Задачи" route="/tasks"/>
                <NavItem text="Вопросы HTML" route="/html" />
                <NavItem text="Вопросы CSS" route="/css" />
                <NavItem text="Вопросы JS" route="/javascript" />
                <NavItem text="Хитрости" route="/tricks" />
                <NavItem text="Описание" route="/" />
            </div>

        </>
    )
}

export default NavBar