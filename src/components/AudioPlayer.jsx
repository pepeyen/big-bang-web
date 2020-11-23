import React, {
    useState,
    useEffect
} from 'react';

import {
    AudioPlayerButton,
    AudioController,
    AudioVolumeController
} from './index';

const AudioPlayer = (props) => {
    const [audio] = useState(new Audio(props.audioURL));
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [audioDuration,setAudioDuration] = useState(0);
    const [audioCurrentTime,setAudioCurrentTime] = useState(0);
    const [audioCurrentVolume,setAudioCurrentVolume] = useState(0.6);

    useEffect(() => {
        audio.volume = 1 - audioCurrentVolume;

        audio.addEventListener('ended', () => {
            setIsAudioPlaying(false);
        });

        audio.addEventListener('loadeddata', () => {
            setAudioDuration(audio.duration);
        });

        isAudioPlaying ? audio.play() : audio.pause();

        return () => {
            audio.removeEventListener('ended', () => {
                setIsAudioPlaying(false);
            });
        };
    }, [audio,isAudioPlaying,audioCurrentVolume]);

    audio.ontimeupdate = () => {
        setAudioCurrentTime(audio.currentTime);
    };

    const playerHandler = () => {
        setIsAudioPlaying(!isAudioPlaying);
    };

    const controllerHandler = (e) => {
        const progressBar = document.getElementById('progress-bar');
        const x = e.pageX - progressBar.offsetLeft;
        const clickedValue = x / progressBar.offsetWidth;

        audio.currentTime = clickedValue * audioDuration;
        setAudioCurrentTime(clickedValue * audioDuration);
    };
    
    const volumeHandler = (e) => {
        const progressBar = document.getElementById('volume-bar');
        const y = e.pageY - progressBar.offsetTop;
        const clickedValue = y / progressBar.offsetHeight;

        audio.volume = clickedValue;
        setAudioCurrentVolume(clickedValue)
    };

    return(
        <div className="player">
            <AudioPlayerButton 
                audioURL={props.audioURL}
                isAudioPlaying={isAudioPlaying}
                playerHandler={playerHandler}
            />
            <AudioController
                audioCurrentTime={audioCurrentTime}
                audioFullDuration={audioDuration}
                controllerHandler={controllerHandler}
            >
                <AudioVolumeController
                    currentVolume={audioCurrentVolume}
                    volumeHandler={volumeHandler}
                />
            </AudioController>
        </div>
    );
}

export default AudioPlayer;