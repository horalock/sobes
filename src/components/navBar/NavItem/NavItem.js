import React from 'react';

function NavItem(props) {
    
    return (
        <>
            <a className='nav-item' href='https://hh.ru/'>{props.text}</a>
        </>
    )
}

export default NavItem