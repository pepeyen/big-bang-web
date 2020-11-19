import React, {
    useState,
    useEffect
} from 'react';
import {Redirect} from 'react-router-dom';

//Components
import {
    Page,
    Post
} from '../components';

//Services
import {getCurrentPageUser} from '../services';

const Profile = (props) => {
    const [responseData,setResponseData] = useState('');
    const [isLoading,setIsloading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/users/${getCurrentPageUser(props.location.pathname)}`, { 
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
                setResponseData(data.users.user_name);
                setIsloading(false);
            }
        })
    },[props.location.pathname]);

    if(responseData === 404){
        return (
            <Redirect to="/error/404" />
        );
    }else{
        return(
            <Page isLoading={isLoading}>
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
            </Page>
        );
    }
}

export default Profile;