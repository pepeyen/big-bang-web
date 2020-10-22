import React from 'react';

const NavbarImage = (props) => {
    return(
        <li className="navbar__redirector">
            {props.children}
            <a href="/#">
                <img 
                    className="navbar__image"
                    src={props.imageURL}
                    alt={props.imageAlt}
                />
            </a>
        </li>
    );
}

export default NavbarImage;