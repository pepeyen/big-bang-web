import React from 'react';
import { Link } from 'react-router-dom';

//Services
import getCurrentPage from '../../services/getCurrentPage';

function NavbarLink(props){
    const currentPage = getCurrentPage();
    let redirectorNormalized = props.redirector.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if(redirectorNormalized === 'inicio'){
        redirectorNormalized = ''
    }

    return(
        <li className="navbar__redirector">
            <Link
                className={currentPage === redirectorNormalized ? '--active' : ''} 
                to={redirectorNormalized}
            >
                {props.redirector.toUpperCase()}
            </Link>
        </li>
    );
}

export default NavbarLink;