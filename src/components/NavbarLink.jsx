import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

//Services
import {disableElement} from '../services';

const NavbarLink = (props) => {

    useEffect(() => {
        if(props.disabled){
            disableElement(`${props.redirector}-redirector`);
        }
    },[props.disabled,props.redirector]);

    if(props.button){
        return(
            <li
                id={`${props.redirector}-redirector`}
                className="navbar__redirector"
                onClick={() => {props.clickHandle(props.redirector)}}
            >
                <button
                    className={props.isActive ? '--active' : null}
                    title={props.redirectorTitle}
                >
                    {props.children}
                </button>
            </li>
        );
    }else{
        return(
            <li
                id={`${props.redirector}-redirector`}
                className="navbar__redirector"
                onClick={() => {props.clickHandle(props.redirector)}}
            >
                <Link
                    className={props.isActive ? '--active' : null}
                    to={`/${props.redirector}`}
                    title={props.redirectorTitle}
                replace>
                    {props.children}
                </Link>
            </li>
        );
    }
}

export default NavbarLink;