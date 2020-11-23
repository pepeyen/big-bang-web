import React from 'react';

//Services
import {secondsToMinutes} from '../services';

const AudioController = (props) => {
    return(
        <div className="player-controller">
            <div
                id="progress-bar"
                className="player-controller__bar"
                onClick={props.controllerHandler}
            >
                <div
                    className="player-controller__bar-status"
                    style={{width: `${(props.audioCurrentTime/props.audioFullDuration) * 100}%`}}
                />
            </div>
            {props.children}
            <span>{secondsToMinutes(props.audioCurrentTime)} / {secondsToMinutes(props.audioFullDuration)}</span>
        </div>
    );
};

export default AudioController;