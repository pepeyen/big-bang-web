import React from 'react';

//Assets
import img_logo from '../assets/images/navbar/logo.svg';
import img_search from  '../assets/images/navbar/icon-search.svg';
import img_profile from  '../assets/images/navbar/icon-profile.svg';
import img_orders from  '../assets/images/navbar/icon-orders.svg';
import img_wishes from  '../assets/images/navbar/icon-wishes.svg';
import img_cart from  '../assets/images/navbar/icon-cart.svg';
import img_logout from  '../assets/images/navbar/icon-logout.svg';

//Components
import NavbarLink from './NavbarLink';
import NavbarBrand from './NavbarBrand';
import NavbarImage from './NavbarImage';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar__buttons --space-between">
                <ul className="navbar__redirectors --links --space-between">
                    <NavbarLink redirector='home'>
                        HOME
                    </NavbarLink>
                    <NavbarLink redirector='blog'>
                        BLOG
                    </NavbarLink>
                    <NavbarLink redirector='store'>
                        STORE
                    </NavbarLink>
                    <NavbarLink redirector='podcasts'>
                        PODCASTS
                    </NavbarLink>
                    <NavbarLink redirector='courses'>
                        COURSES
                    </NavbarLink>
                    <NavbarLink redirector='contact'>
                        CONTACT
                    </NavbarLink>
                </ul>
                <NavbarBrand 
                    logoURL={img_logo}
                    logAlt='logo'
                />
                <ul className="navbar__redirectors --space-between --reverse">
                    <NavbarLink redirector="search">
                        <NavbarImage 
                            imageURL={img_search}
                            imageAlt='Search'
                        />
                    </NavbarLink>
                    <NavbarLink redirector={`user${window.sessionStorage.getItem('loggedUserId') === null ? 
                    '' : `?userId=${window.sessionStorage.getItem('loggedUserId')}`}`}>
                        <NavbarImage 
                            imageURL={img_profile}
                            imageAlt='Profile'
                        />
                    </NavbarLink>
                    <NavbarLink redirector="orders">
                        <NavbarImage 
                            imageURL={img_orders}
                            imageAlt='Orders'
                        />
                    </NavbarLink>
                    <NavbarLink redirector="wishlist">
                        <NavbarImage 
                            imageURL={img_wishes}
                            imageAlt='Wishlist'
                        />
                    </NavbarLink>
                    <NavbarLink redirector="cart">
                        <NavbarImage 
                            imageURL={img_cart}
                            imageAlt='Cart'
                        >
                            <div className="navbar__cart-index">99</div>
                        </NavbarImage>
                    </NavbarLink>
                    <NavbarLink redirector="logout">
                        <NavbarImage 
                            imageURL={img_logout}
                            imageAlt='Log out'
                        />
                    </NavbarLink>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;