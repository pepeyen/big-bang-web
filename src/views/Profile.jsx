import React, {
    useState,
    useEffect
} from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {Navbar} from '../components';

//Services
import {getCurrentUserID} from '../services';

const Profile = () => {
    const [responseData,setResponseData] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/client/${getCurrentUserID()}`, {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(!data.success){
                setResponseData(data.description);
            }else{
                setResponseData(data.user_info.userName);
            }
        })
    },[]);

    if(window.sessionStorage.getItem('isLoggedIn')){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <span>Profile Page</span>
                <br />
                <span>{responseData}</span>
            </React.Fragment>
        );
    }else{
        return(
            <Redirect to="/login" />
        );
    }
}

export default Profile;