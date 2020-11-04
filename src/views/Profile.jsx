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
import {getCurrentPageID} from '../services';

const Profile = () => {
    const [responseData,setResponseData] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/client/${getCurrentPageID()}`, { 
            method: 'GET',
            credentials: 'include'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(!data.success){
                setResponseData(404);
            }else{
                setResponseData(data.user_info.userName);
            }
        })
    },[]);

    if(responseData === 404){
        return (
            <Redirect to="/error/404" />
        );
    }else{
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
    }
}

export default Profile;