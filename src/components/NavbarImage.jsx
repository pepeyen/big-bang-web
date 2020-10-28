import React from 'react';

const NavbarImage = (props) => {
    return(
        <React.Fragment>
            {props.children}
            <img 
                className="navbar__image"
                src={props.imageURL}
                alt={props.imageAlt}
            />
        </React.Fragment>
    );
}

export default NavbarImage;