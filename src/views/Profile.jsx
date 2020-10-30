import React from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {Navbar} from '../components';

const Profile = () => {
    if(window.sessionStorage.getItem('isLoggedIn')){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <span>Profile Page</span>
            </React.Fragment>
        );
    }else{
        return(
            <Redirect to="/login" />
        );
    }
}

export default Profile;