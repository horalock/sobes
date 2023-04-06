import React from 'react';
import './NavBar.css'
import NavItem from './NavItem/NavItem';

function NavBar() {

    return (
        <>
            <h1>Hey</h1>
            <div className='nav-items'>
                <NavItem text="Задачи" />
                <NavItem text="Вопросы HTML" />
                <NavItem text="Вопросы CSS" />
                <NavItem text="Вопросы JS" />
                <NavItem text="Хитрости" />
            </div>

        </>
    )
}

export default NavBar