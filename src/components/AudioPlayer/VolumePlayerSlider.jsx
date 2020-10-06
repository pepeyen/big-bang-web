import React from 'react';

function AudioPlayerSlider(props){
    return(
        <div className={`player --${props.isAudioPlaying ? 'playing' : 'paused'}`}>
            {props.children}
        </div>
    );
}

export default AudioPlayerSlider;