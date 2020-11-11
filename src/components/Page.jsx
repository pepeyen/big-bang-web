import React from 'react';

//Components
import {Loader} from '../components';

const Page = (props) => {
    if(props.spinner){       
        return(
            <section className="page">
                {props.pageTitle ? <p className="page__place-holder">{props.pageTitle}</p> : ''}
                <Loader isLoading={props.isLoading} />
                {props.children}
            </section>
        );
    }else{
        return(
            <section className={props.isLoading ? "page --loading" : "page"}>
                {props.pageTitle ? <p className="page__place-holder">{props.pageTitle}</p> : ''}
                {props.children}
            </section>
        );
    }
};

export default Page;