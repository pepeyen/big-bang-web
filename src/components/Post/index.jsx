import React from 'react';

function Post(props){
    let listingType = props.listing === 'table' ? props.listing : 'central';

    return(
        <article className={props.title !== undefined ? `page__post --central --top-thin-borders --spaced-top --${listingType}` : `page__post --central --${listingType}`}>
            {props.title !== undefined ? <span className="page__post-title --dark-text">{props.title}</span> : ''}
            {props.children}
        </article>
    );
}

export default Post;