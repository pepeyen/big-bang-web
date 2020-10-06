import React from 'react';

function VolumePlayerSlider(props){
    return(
        <div className={`player --${props.isAudioPlaying ? 'playing' : 'paused'}`}>
            {props.children}
        </div>
    );
}

export default VolumePlayerSlider;