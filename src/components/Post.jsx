import React from 'react';

const Post = (props) => {
    let listingType = props.listing === 'table' ? props.listing : null;

    return(
        <article className={`page__post --central ${props.title !== undefined ? '--top-thin-borders --spaced-top' : ''} ${listingType !== null ? `--${listingType}` : ''}`}>
            {props.title !== undefined ? <span className="page__post-title --dark-text --negative-top">{props.title}</span> : ''}
            {props.children}
        </article>
    );
}

export default Post;