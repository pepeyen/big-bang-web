import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBrand = (props) => {
    return(
        <Link 
            to="/#"
            className="navbar__logo"
        >
            {props.children}
        </Link> 
    );
}

export default NavbarBrand;