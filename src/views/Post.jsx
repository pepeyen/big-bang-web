import React, {
    useState,
    useEffect
} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//Components
import {Navbar} from '../components';

//Services
import {
    getCurrentPageID,
    fetchFromBlob
} from '../services';

const Post = () => {
    const [postHeaders, setPostHeaders] = useState({});
    const [postMarkdown, setPostMarkdown] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/posts/${getCurrentPageID()}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.sucess === false){
                setPostMarkdown(404);
            }else{
                setPostHeaders({
                    postTitle: data.posts.post_title,
                    postTheme: data.posts.post_theme.toUpperCase(),
                    postAuthor: data.posts.post_author
                });
                fetchFromBlob(data.posts.post_id, 'markdown', 'posts', 'id', 'md')
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    setIsLoading(false);
                    setPostMarkdown(data);
                })
            }
        });
    },[]);

    if(postMarkdown !== 404){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className={isLoading ? "page --loading" : "page"}>
                        <div className="page__post --central">
                            <img 
                                className="page__post-banner"
                                src={`${process.env.REACT_APP_BLOB_HOST}/jpeg/post/bg-${getCurrentPageID()}.jpg`}
                                alt={postHeaders.postTitle}
                            />
                            <div className="page__post-title">{postHeaders.postTitle}</div>
                            <div className="page__post-info">
                                <span className="page__post-type --grey-text --bottom-thin-borders">{postHeaders.postTheme}</span>
                                <span className="page__post-onwership --grey-text --bottom-thin-borders">por <Link to={`/user/${postHeaders.postAuthor}`}>{postHeaders.postAuthor}</Link></span>
                            </div>
                            <div className="page__post-article --dark-grey-text">
                                <ReactMarkdown source={postMarkdown}/>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Post;