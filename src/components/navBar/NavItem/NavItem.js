import React from 'react';
import { Link } from "react-router-dom";

function NavItem(props) {
    
    return (
        <>
            <Link to={props.route} className='nav-item'>{props.text}</Link>
        </>
    )
}

export default NavItem