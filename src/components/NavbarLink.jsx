import React from 'react';
import {Link} from 'react-router-dom';

const NavbarLink = (props) => {
    return(
        <li 
            className="navbar__redirector"
            onClick={() => {props.clickHandle(props.redirector)}}
        >
            <Link
                className={props.isActive ? '--active' : ''}
                to={`/${props.redirector}`}
            >
                {props.children}
            </Link>
        </li>
    );
}

export default NavbarLink;