import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBrand = (props) => {
    return(
        <Link 
            to="/#"
            className="navbar__logo"
        >
            <img 
                src={props.logoURL}
                alt={props.logoAlt}
            />
        </Link>
    );
}

export default NavbarBrand;