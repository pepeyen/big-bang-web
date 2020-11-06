import React, {
    useState,
    useEffect
} from 'react';
import {Redirect} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

//Components
import {Navbar} from '../components';

//Services
import {API} from '../services/mockData';
import {
    getCurrentPageID,
    getCurrentPageType,
    filterOverall,
    fetchFromBlob
} from '../services';

const Post = () => {
    const posts = filterOverall(getCurrentPageID(),'post',API);
    const [postHeaders, setPostHeaders] = useState({});
    const [postMarkdown, setPostMarkdown] = useState('');

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_END_HOST}/api/posts/${posts.ID}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.length === 0){
                setPostMarkdown('# Post not found');
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
                    setPostMarkdown(data)
                })
            }
        })
    },[posts.ID]);


    if(posts !== -1 && posts === filterOverall(getCurrentPageID(),getCurrentPageType(),API)){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className="page">
                        <div className="page__post --central">
                            <img 
                                className="page__post-banner"
                                src={posts.media.bannerURL} 
                                alt={posts.info.title} 
                            />
                            <p className="page__post-title">{postHeaders.postTitle}</p>
                            <div className="page__post-info">
                                <span className="page__post-type --grey-text --bottom-thin-borders">{postHeaders.postTheme}</span>
                                <span className="page__post-onwership --grey-text --bottom-thin-borders">por {postHeaders.postAuthor}</span>
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