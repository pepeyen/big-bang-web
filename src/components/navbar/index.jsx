import React from 'react';

//Styles
import './_navbar.scss';

//Assets
import img_logo from '../../assets/images/navbar/logo.svg';
import img_search from  '../../assets/images/navbar/icon-search.svg';
import img_profile from  '../../assets/images/navbar/icon-profile.svg';
import img_orders from  '../../assets/images/navbar/icon-orders.svg';
import img_wishes from  '../../assets/images/navbar/icon-wishes.svg';
import img_cart from  '../../assets/images/navbar/icon-cart.svg';
import img_logout from  '../../assets/images/navbar/icon-logout.svg';

//Components
import NavbarLink from './NavbarLink';
import NavbarBrand from './NavbarBrand';
import NavbarImage from './NavbarImage';

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar__buttons --space-between">
                <ul className="navbar__redirectors --space-between">
                    <NavbarLink 
                        currentPage='inicio'
                        redirector='início'
                    />
                    <NavbarLink 
                        currentPage='inicio'
                        redirector='blog'
                    />
                    <NavbarLink 
                        currentPage='inicio'
                        redirector='loja'
                    />
                    <NavbarLink 
                        currentPage='inicio'
                        redirector='podcasts'
                    />
                    <NavbarLink 
                        currentPage='inicio'
                        redirector='cursos'
                    />
                    <NavbarLink 
                        currentPage='inicio'
                        redirector='contato'
                    />
                </ul>
                <NavbarBrand 
                    logoURL={img_logo}
                    logAlt='logo'
                />
                <ul className="navbar__redirectors --space-between --reverse">
                    <NavbarImage 
                        imageURL={img_search}
                        imageAlt='Search'
                    />
                    <NavbarImage 
                        imageURL={img_profile}
                        imageAlt='Profile'
                    />
                    <NavbarImage 
                        imageURL={img_orders}
                        imageAlt='Orders'
                    />
                    <NavbarImage 
                        imageURL={img_wishes}
                        imageAlt='Wishlist'
                    />
                    <NavbarImage 
                        imageURL={img_cart}
                        imageAlt='Cart'
                    >
                        <div className="navbar__cart-index">99</div>
                    </NavbarImage>
                    <NavbarImage 
                        imageURL={img_logout}
                        imageAlt='Log out'
                    />
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;