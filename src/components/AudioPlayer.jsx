import React from 'react';

const AudioPlayer = (props) => {
    return(
        <div className="player">
            {props.children}
        </div>
    );
}

export default AudioPlayer;