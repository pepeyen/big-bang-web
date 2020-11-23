import React, {
    useState,
    useEffect
} from 'react';

const AudioVolumeControler = (props) => {
    const [isVolumeBarVisible,setIsVolumeBarVisible] = useState(false);
    
    useEffect(() => {
        document.getElementById('volume-bar').style.visibility = 'hidden';
    },[]);

    const volumeBarVisibilityHandler = () => {
        const volumeBar = document.getElementById('volume-bar');

        if(isVolumeBarVisible){
            volumeBar.style.visibility = 'hidden';
        }else{
            volumeBar.style.visibility = 'visible';
        }

        setIsVolumeBarVisible(!isVolumeBarVisible);
    };

    return(
        <div className="player-controller__volume">
            <div
                id="volume-bar"
                className="player-controller__volume-bar"
                onClick={props.volumeHandler}
            >
                <div
                    className="player-controller__volume-bar-status"
                    style={{height: `${(1 - props.currentVolume) * 100}%`}}
                />
            </div>
            <svg
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={volumeBarVisibilityHandler}
            >
                <path
                    d="M4.637 7.72512H0V18.0551H4.637L13.403 24.5571C13.403 24.5571 15.014 25.9031 15.014 24.5121C15.014 23.1171 15.014 2.33512 15.014 1.06612C15.014 -0.0258805 13.596 1.04112 13.596 1.04112L4.637 7.72512Z"
                    fill="#DADADA"
                />
                <path
                    d="M20.0059 5.70926C19.5449 5.24926 18.7989 5.24926 18.3379 5.70926C17.8769 6.17126 17.8769 6.92026 18.3379 7.37526C19.8559 8.89626 20.6079 10.8703 20.6109 12.8593C20.6069 14.8523 19.8549 16.8383 18.3379 18.3543C17.8769 18.8133 17.8769 19.5653 18.3379 20.0263C18.5679 20.2563 18.8689 20.3703 19.1739 20.3703C19.4749 20.3703 19.7759 20.2573 20.0059 20.0263C21.9829 18.0473 22.9709 15.4483 22.9689 12.8593C22.9709 10.2733 21.9799 7.68226 20.0059 5.70926Z"
                    fill="#DADADA"
                />
                <path
                    d="M23.207 1.99373C22.74 1.53073 21.996 1.53073 21.531 1.99373C21.074 2.45673 21.074 3.20173 21.531 3.66473C24.08 6.21273 25.353 9.53374 25.355 12.8707C25.353 16.2227 24.085 19.5647 21.531 22.1207C21.072 22.5817 21.074 23.3277 21.531 23.7907C21.763 24.0197 22.068 24.1347 22.369 24.1347C22.672 24.1347 22.976 24.0197 23.207 23.7907C26.213 20.7727 27.717 16.8177 27.717 12.8707C27.717 8.93674 26.203 4.99573 23.207 1.99373Z"
                    fill="#DADADA"
                />
            </svg>
        </div>
    );
};

export default AudioVolumeControler;