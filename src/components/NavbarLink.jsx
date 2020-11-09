import React from 'react';
import {Link} from 'react-router-dom';

//Services
import {
    getCurrentPageURI,
    getCurrentPageType,
    translatePageType
} from '../services';

const NavbarLink = (props) => {
    const regex = new RegExp(/[^/]*/);
    let currentPage = getCurrentPageURI();
    let redirectorNormalized = props.redirector.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if(translatePageType(getCurrentPageType(window.location.hash)) === redirectorNormalized){
        currentPage = translatePageType(getCurrentPageType(window.location.hash));
    }else{
        if(redirectorNormalized === 'home'){
            redirectorNormalized = ''
        }
    }

    return(
        <li className="navbar__redirector">
            <Link
                className={regex.exec(currentPage).toString() === regex.exec(redirectorNormalized).toString() ? '--active' : ''} 
                to={`/${redirectorNormalized}`}
            >
                {props.children}
            </Link>
        </li>
    );
}

export default NavbarLink;