import React from 'react';
import {Redirect} from 'react-router-dom';

//Components
import Navbar from '../../components/Navbar';

//Services
import {posts} from '../../services/mockData';
import {getCurrentPageID} from '../../services/getCurrentPage';
import filterByID from '../../services/filterByID';

function Post(){
    const postID = filterByID(getCurrentPageID(),posts);
    if(postID !== -1){
        return(
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <section className="page">
                        <img 
                            className=""
                            src={posts[postID].bannerURL} alt={posts[postID].title} 
                        />
                        <div className="">
                            <p className="">{posts[postID].title}</p>
                            <p className="">{posts[postID].info}</p>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }else return <Redirect to="/error/404" />
}

export default Post;