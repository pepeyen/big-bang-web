import React from 'react';

function NavbarLink(props){
    return(
        <li className="navbar__redirector">
            <a 
                className={props.currentPage.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === props.redirector.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ? "--active" : ""} 
                href="/#"
            >
                {props.redirector.toUpperCase()}
            </a>
        </li>
    );
}

export default NavbarLink;