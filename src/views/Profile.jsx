import React, {
    useState,
    useEffect
} from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {
    Navbar,
    Post
} from '../components';

//Services
import {getCurrentUserID} from '../services';

const Profile = () => {
    const [responseData,setResponseData] = useState('');

    useEffect(() => {
        if(window.sessionStorage.getItem('loggedUserId') !== null){
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
        }
    },[]);

    if(window.sessionStorage.getItem('isLoggedIn')){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className="page">
                        <Post>
                            <div className="profile">
                                <div className="profile__picture">
                                    <span>{responseData[0]}</span>
                                </div>
                                <div className="profile__name">
                                    <div className="--hoverable">{responseData}</div>
                                </div>
                            </div>
                        </Post>
                    </section>
                </main>
            </React.Fragment>
        );
    }else{
        return(
            <Redirect to="/login" />
        );
    }
}

export default Profile;