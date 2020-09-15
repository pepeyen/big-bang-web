import React from 'react';

function Clusters(props){
    return(
        <ul className={`page__clusters --${props.type}`}>
            {props.children}
        </ul>
    );
}

export default Clusters;