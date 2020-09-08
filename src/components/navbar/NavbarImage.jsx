import React from 'react';

function NavbarImage(props){
    return(
        <a href="/#">
            <img 
                className="navbar__image"
                src={props.imageURL}
                alt={props.imageAlt}
            />
        </a>
    );
}

export default NavbarImage;