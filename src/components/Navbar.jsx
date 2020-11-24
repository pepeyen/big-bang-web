import React, {
    useEffect,
    useState
} from 'react';
import {withRouter} from 'react-router-dom';

//Assets
import img_logo from '../assets/images/navbar/logo.svg';
import img_search from  '../assets/images/navbar/icon-search.svg';
import img_profile from  '../assets/images/navbar/icon-profile.svg';
import img_orders from  '../assets/images/navbar/icon-orders.svg';
import img_wishes from  '../assets/images/navbar/icon-wishes.svg';
import img_cart from  '../assets/images/navbar/icon-cart.svg';
import img_logout from  '../assets/images/navbar/icon-logout.svg';

//Components
import {CartStatus} from './index';
import NavbarLink from './NavbarLink';
import NavbarBrand from './NavbarBrand';
import NavbarImage from './NavbarImage';

//Services
import {
    getCurrentPageURIManual,
    getCurrentPageType,
    translatePageType
} from '../services';

const Navbar = (props) => {
    const [activeNavLink,setActiveNavLink] = useState();

    useEffect(() => {
        setActiveNavLink(translatePageType(getCurrentPageType(getCurrentPageURIManual(props.location.pathname + props.location.search))));
    },[setActiveNavLink,props.location]);

    const navbarLinkUpdate = (navLinkRedirect) => {
        setActiveNavLink(navLinkRedirect);
    };

    return(
        <nav className="navbar">
            <div className="navbar__buttons --space-between">
                <ul className="navbar__redirectors --links --space-between">
                    <NavbarLink
                        redirector='home'
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === 'home'}
                    >
                        HOME
                    </NavbarLink>
                    <NavbarLink 
                        redirector='blog'
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === 'blog'}
                    >
                        BLOG
                    </NavbarLink>
                    <NavbarLink 
                        redirector='store'
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === 'store'}
                    >
                        STORE
                    </NavbarLink>
                    <NavbarLink 
                        redirector='podcasts'
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === 'podcasts'}
                    >
                        PODCASTS
                    </NavbarLink>
                    <NavbarLink 
                        redirector='courses'
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === 'courses'}
                    >
                        COURSES
                    </NavbarLink>
                    <NavbarLink 
                        redirector='contact'
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === 'contact'}
                    >
                        CONTACT
                    </NavbarLink>
                </ul>
                <NavbarBrand 
                    logoURL={img_logo}
                    logAlt='logo'
                />
                <ul className="navbar__redirectors --space-between --reverse">
                    <NavbarLink 
                        redirector="search"
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === "search"}
                    >
                        <NavbarImage 
                            imageURL={img_search}
                            imageAlt='Search'
                        />
                    </NavbarLink>
                    <NavbarLink 
                        redirector={window.sessionStorage.getItem('loggedUser') === null ? 'login' : `user/${window.sessionStorage.getItem('loggedUser')}`}
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === (window.sessionStorage.getItem('loggedUser') === null ? 'login' : 'user')}
                    >
                        <NavbarImage 
                            imageURL={img_profile}
                            imageAlt='Profile'
                        />
                    </NavbarLink>
                    <NavbarLink 
                        redirector="orders"
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === "orders"}
                    >
                        <NavbarImage 
                            imageURL={img_orders}
                            imageAlt='Orders'
                        />
                    </NavbarLink>
                    <NavbarLink 
                        redirector="wishlist"
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === "wishlist"}
                    >
                        <NavbarImage 
                            imageURL={img_wishes}
                            imageAlt='Wishlist'
                        />
                    </NavbarLink>
                    <NavbarLink 
                        redirector="cart"
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === "cart"}
                    >
                        <NavbarImage 
                            imageURL={img_cart}
                            imageAlt='Cart'
                        >
                            <CartStatus />
                        </NavbarImage>
                    </NavbarLink>
                    <NavbarLink 
                        redirector="logout"
                        clickHandle={navbarLinkUpdate}
                        isActive={activeNavLink === "logout"}
                    >
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

export default withRouter(Navbar);