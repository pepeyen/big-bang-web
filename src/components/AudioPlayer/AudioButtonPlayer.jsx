import React, { useState,useEffect } from 'react';

const AudioPlayer = (props) => {
    const [audio] = useState(new Audio(props.audioURL));
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isButtonBright, setIsButtonBright] = useState(false);

    useEffect(() => {
        audio.addEventListener('ended', () => {
            setIsAudioPlaying(false);
            setIsButtonBright(false);
        });
        return () => {
            audio.removeEventListener('ended', () => {
                setIsAudioPlaying(false);
                setIsButtonBright(false);
            });
        };
    }, [audio]);

    useEffect(() => {
        isAudioPlaying ? audio.play() : audio.pause();
    }, [isAudioPlaying, audio])

    const playerHandler = () => {
        setIsAudioPlaying(!isAudioPlaying);
    }
    const setButtonHoverState = () => {
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            setIsButtonBright(!isButtonBright);
        }
    }
    return(
        <button
            className={`player__button --${isAudioPlaying ? 'playing' : 'paused'}`}
            type="button"
            onMouseEnter={setButtonHoverState}
            onMouseLeave={setButtonHoverState}
            onClick={playerHandler}
        >
            <svg 
                className="player__background"
                viewBox="0 0 320 300" fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
            {
                isAudioPlaying ?
                    <React.Fragment>
                        <path 
                            d="M91.125 0H25.875C19.872 0 15 6.72 15 15V285C15 293.28 19.872 300 25.875 300H91.125C97.128 300 102 293.28 102 285V15C102 6.72 97.128 0 91.125 0Z" 
                            fill={isButtonBright ? '#73A8A0' : '#ffffff'}
                        /> 
                        <path 
                            d="M274.125 0H208.875C202.872 0 198 6.72 198 15V285C198 293.28 202.872 300 208.875 300H274.125C280.128 300 285 293.28 285 285V15C285 6.72 280.128 0 274.125 0Z" 
                            fill={isButtonBright ? '#73A8A0' : '#ffffff'}
                        />
                    </React.Fragment> 
                : <path d="M292.349 136.92L52.3499 1.92057C47.6999 -0.689423 42.03 -0.629423 37.44 2.04057C32.82 4.74056 30 9.66054 30 15.0005V285C30 290.34 32.82 295.26 37.44 297.96C39.78 299.31 42.39 300 45 300C47.5199 300 50.0699 299.37 52.3499 298.08L292.349 163.08C297.059 160.41 299.999 155.43 299.999 150C299.999 144.57 297.059 139.59 292.349 136.92Z" fill={isButtonBright ? '#73A8A0' : '#ffffff'}/> 
            }
            </svg>
        </button>
    );
}

export default AudioPlayer;