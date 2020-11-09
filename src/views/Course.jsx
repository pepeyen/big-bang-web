import React, {
    useEffect,
    useState
} from 'react';
import {Redirect} from 'react-router-dom';

//Component
import {Navbar} from '../components';

//Services
import {
    getCurrentPageID,
    calcDateDiff
} from '../services';

const Course = (props) => {
    const [course,setCourse] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const currentPageId = getCurrentPageID(props.location.search);

    useEffect(() => {
        setIsLoading(true);

        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/courses/${currentPageId}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.sucess === false){
                setCourse(-1);
            }else{
                setIsLoading(false);
                setCourse(data.courses);
            }
        })
    },[currentPageId]);

    if(course !== -1 && currentPageId !== -1){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className={isLoading ? "page --loading" : "page"}>
                        <div className="page__product">
                            <img 
                                className=""
                                src={`${process.env.REACT_APP_BLOB_HOST}/jpeg/course/bg-${currentPageId}.jpg`} 
                                alt={course.course_title ? course.course_title : 'Loading'}  
                            />
                            <div className="page__product-info">
                                <p className="page__filler-product-name">{course.course_title ? course.course_title : 'Loading'}</p>
                                <p className="page__filler-product-info">CURSO {course.course_date ? calcDateDiff(course.course_date.course_start_date,course.course_date.course_end_date) + ' Days' : 'Loading'}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Course;