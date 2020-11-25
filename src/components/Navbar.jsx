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
import {
    CartStatus,
    HamburguerMenu
} from './index';
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

        if(!window.sessionStorage.getItem('isLoggedIn')){
            document.getElementById('logout-redirector').style.display = 'none';
        }else{
            document.getElementById('logout-redirector').style.display = 'initial';
        }

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            const hamburguerItemsElement = document.getElementById('hamburguer-menu-items');
            const redirectorViewsElement = document.getElementById('redirectors-views');

            document.getElementById('redirectors-views').style.display = 'none';

            while(redirectorViewsElement.childNodes.length > 0){
                hamburguerItemsElement.appendChild(redirectorViewsElement.childNodes[0]);
            };

            const redirectorMiscElement = document.getElementById('redirectors-misc');

            const hamburguerMenuMiscListElement = document.getElementsByClassName('hamburguer-menu__misc-items').className ?? document.createElement("ul");

            if(hamburguerItemsElement.className !== 'hamburguer-menu__misc-items'){
                hamburguerMenuMiscListElement.classList.add('hamburguer-menu__misc-items');
            }

            while(redirectorMiscElement.childNodes.length > 4){
                for(let i = 0; i < redirectorMiscElement.childNodes.length; i++){
                    if(redirectorMiscElement.childNodes[i].id !== 'login-redirector' && redirectorMiscElement.childNodes[i].id !== 'wishlist-redirector' && redirectorMiscElement.childNodes[i].id !== 'cart-redirector' && redirectorMiscElement.childNodes[i].id !== ''){
                        hamburguerMenuMiscListElement.appendChild(redirectorMiscElement.childNodes[i]);
                    }
                }
            }
            
            if(hamburguerItemsElement.lastChild.className !== 'hamburguer-menu__misc-items'){
                hamburguerItemsElement.appendChild(hamburguerMenuMiscListElement);
            }
        };
    },[setActiveNavLink,props.location]);

    const navbarLinkUpdate = (navLinkRedirect) => {
        setActiveNavLink(navLinkRedirect);
    };

    return(
        <nav className="navbar">
            <div className="navbar__buttons">
                <ul
                    id="redirectors-views"
                    className="navbar__redirectors"
                >
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
                <ul
                    id="redirectors-misc"
                    className="navbar__redirectors --reverse"
                >
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
                    <HamburguerMenu />
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);