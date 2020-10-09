import React from 'react';

//Component
import Navbar from '../../components/Navbar';

//Services
import {API} from '../../services/mockData';
import {filterByType} from '../../services/filters';

function Courses(){
    const posts = filterByType('course',API);

    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Courses</p>
                    {posts.map((element,index) => {
                        return(
                            <React.Fragment key={index}>
                                <p className="">{element.title}</p>
                                <p className="">{element.info.type} - {element.info.date.day} {element.info.date.month}</p>
                                <img 
                                    className=""
                                    src={element.bannerURL} alt={element.title} 
                                />
                            </React.Fragment>
                        );
                    })}
                </section>
            </main>
        </React.Fragment>
    );
}

export default Courses;