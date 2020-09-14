import React from 'react';

function NavbarBrand(props){
    return(
        <img 
            className="navbar__logo"
            src={props.logoURL}
            alt={props.logoAlt}
        />
    );
}

export default NavbarBrand;