import React, {
    useState,
    useEffect
} from 'react';

//Component
import {
    Post,
    Redirector,
    RedirectorInfo,
    RedirectorText,
    RedirectorBanner,
    Loader
} from '../components';

//Services
import {timeConverter} from '../services';

const Courses = () => {
    const [courses,setCourses] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/courses`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setIsLoading(false);
            setCourses(data.courses);
        })
    },[]);

    return(
        <section className="page">
            <p className="page__place-holder">Courses</p>
            <Loader isLoading={isLoading} />
            <Post listing="table">
                {courses.map((element,index) => {
                    return(
                       <Redirector 
                           key={index}
                           redirectorType='course'
                           redirectorID={element.course_id}
                       >
                            <RedirectorBanner
                                url={`${process.env.REACT_APP_BLOB_HOST}/jpeg/course/bg-${element.course_id}.jpg`} 
                                alt={element.course_title} 
                            />
                            <RedirectorInfo>
                                <RedirectorText
                                    infoType="title"
                                    color="dark"
                                >
                                    {element.course_title}
                                </RedirectorText>
                                <RedirectorText
                                    infoType="user"
                                    color="grey"
                                >
                                    CURSO - {timeConverter(element.course_date.course_start_date).day} {timeConverter(element.course_date.course_start_date).month} 
                                </RedirectorText>
                            </RedirectorInfo>
                        </Redirector>
                    );
                })}
           </Post>
        </section>
    );
}

export default Courses;