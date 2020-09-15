import React from 'react';

function Post(props){
    return(
        <article className={props.title !== undefined ? "page__post --central --top-thin-borders --spaced-top" : "page__post --central"}>
            {props.title !== undefined ? <header><span className="page__post-title --dark-text">{props.title}</span></header> : ''}
            {props.children}
        </article>
    );
}

export default Post;