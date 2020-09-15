import React from 'react';
import { Link } from 'react-router-dom';

function NavbarBrand(props){
    return(
        <Link to="/#">
            <img 
                className="navbar__logo"
                src={props.logoURL}
                alt={props.logoAlt}
            />
        </Link>
    );
}

export default NavbarBrand;