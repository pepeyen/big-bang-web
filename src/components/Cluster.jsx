import React from 'react';

const Cluster = (props) => {
    return(
        <ul className={`page__cluster --${props.type}`}>
            {props.children}
        </ul>
    );
}

export default Cluster;