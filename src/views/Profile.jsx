import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//Components
import {Navbar} from '../components';

const Profile = () => {
    const accessToken = useSelector(state => state.accessToken);   

    if(window.sessionStorage.getItem('isLoggedIn') || accessToken){
        const getUserProfile = (access_token) => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("access-token", access_token);
    
            fetch('http://localhost:8080/api/client/42069', {
                headers: myHeaders,
                method: 'GET'
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
            })
        };
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <span>Profile Page</span>
                <br/>
                <span>{accessToken}</span>
            </React.Fragment>
        );
    }else{
        return(
            <Redirect to="/login" />
        );
    }
}

export default Profile;