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

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/posts`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            setPosts(data.posts);
            setIsLoading(false);
        });
    },[]);
    
    return(
        <Page 
            isLoading={isLoading}
            pageTitle="Blog"
        spinner>
            <Post>
                {posts.map((element,index) => {
                    return(
                        <Redirector 
                            key={index}
                            redirectorType='post'
                            redirectorID={element.post_id}    
                        >
                            <RedirectorInfo>
                                <RedirectorText 
                                    infoType="type"
                                    color="dark"
                                >
                                    {element.post_theme}
                                </RedirectorText>
                                <RedirectorText 
                                    infoType="title"
                                    color="dark"
                                >
                                    {element.post_title}
                                </RedirectorText>
                                <RedirectorText 
                                    infoType="user"
                                    color="grey"
                                >
                                    {element.post_author}
                                </RedirectorText>
                            </RedirectorInfo>
                            <RedirectorBanner
                                url={`${process.env.REACT_APP_BLOB_HOST}/jpeg/post/bg-${element.post_id}.jpg`}
                                alt={element.post_title}
                            />
                        </Redirector>
                    );
                })}
            </Post>                    
        </Page>
    );
}

export default Blog;