import React from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {Navbar} from '../components';

const Profile = () => {
    if(sessionStorage.getItem('isLoggedIn')){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <p>Profile Page</p>
            </React.Fragment>
        );
    }else{
        return(
            <Redirect to="/login" />
        );
    }
}

export default Profile;