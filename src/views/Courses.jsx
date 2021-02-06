import React, {
    useState,
    useEffect
} from 'react';

//Component
import {
    Page,
    Post,
    Redirector,
    RedirectorInfo,
    RedirectorText,
    RedirectorBanner
} from '../components';

//Services
import {
    timeConverter,
    fetchFromBackEnd
} from '../services';

const Courses = () => {
    const [courses,setCourses] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        fetchFromBackEnd('courses', '', {method: 'GET'})
        .then(data => {
            setCourses(data.courses);
            setIsLoading(false);
        })
    },[]);

    return(
        <Page
            isLoading={isLoading}
            pageTitle="Courses"
        spinner>
            <Post listing="table">
                {courses.map((element,index) => {
                    return(
                       <Redirector 
                           key={index}
                           redirectorType='course'
                           redirectorID={element.courseId}
                       >
                            <RedirectorBanner
                                url={`${process.env.REACT_APP_BLOB_HOST}/jpeg/course/bg-${element.courseId}.jpg`} 
                                alt={element.courseTitle} 
                            />
                            <RedirectorInfo>
                                <RedirectorText
                                    infoType="title"
                                    color="dark"
                                >
                                    {element.courseTitle}
                                </RedirectorText>
                                <RedirectorText
                                    infoType="user"
                                    color="grey"
                                >
                                    CURSO - {timeConverter(element.courseDate.courseStartDate).day} {timeConverter(element.courseDate.courseStartDate).month} 
                                </RedirectorText>
                            </RedirectorInfo>
                        </Redirector>
                    );
                })}
           </Post>
        </Page>
    );
}

export default Courses;