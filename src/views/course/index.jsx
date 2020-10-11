import React from 'react';
import {Redirect} from 'react-router-dom';

//Component
import Navbar from '../../components/Navbar';

//Services
import {API} from '../../services/mockData';
import {getCurrentPageID,getCurrentPageType} from '../../services/pageInfo';
import {filterOverall} from '../../services/filters';

function Course(){
    const course = filterOverall(getCurrentPageID(),'course',API);

    console.log(course);
    
    if(course !== -1 && course === filterOverall(getCurrentPageID(),getCurrentPageType(),API)){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className="page">
                        <div className="page__product">
                            <img 
                                className=""
                                src={course.bannerURL} 
                                alt={course.title}  
                            />
                            <div className="page__product-info">
                                <p className="page__filler-product-name">{course.title}</p>
                                <p className="page__filler-product-info">{course.info.type}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Course;