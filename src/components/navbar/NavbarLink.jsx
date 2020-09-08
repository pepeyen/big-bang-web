import React from 'react';
import { Link } from 'react-router-dom';

//Services
import getCurrentPage from '../../services/getCurrentPage';

function NavbarLink(props){
    return(
        <li className="navbar__redirector">
            <Link
                className={getCurrentPage() === props.redirector.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ? "--active" : ""} 
                to={props.redirector.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
            >
                {props.redirector.toUpperCase()}
            </Link>
        </li>
    );
}

export default NavbarLink;