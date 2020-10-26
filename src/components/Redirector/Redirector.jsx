import React from 'react';
import {Link} from 'react-router-dom';

//Services
import {getCurrentPageURI} from '../../services/pageInfo';

const Redirector = (props) => {
    return(
        <Link 
            className={`page__redirector page__type-${props.redirectorType} --bottom-thin-borders`}
            to={`/${getCurrentPageURI()}/post?id=${props.redirectorID}&type=${props.redirectorType}`}
        >
            {props.children}
        </Link>
    );
}

export default Redirector;