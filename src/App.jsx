import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Components
import { Footer } from './components';

//Views
import {
    Home,
    Blog,
    Post,
    Store,
    Product,
    Podcasts,
    Podcast,
    Courses,
    Course,
    Contact,
    Profile,
    Login,
    NotFound
} from './views';

const App = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route
                    exact path="/"
                    component={Home}
                />
                <Route
                    exact path="/blog"
                    component={Blog}
                />
                <Route
                    exact path="/store"
                    component={Store}
                />
                <Route
                    exact path="/podcasts"
                    component={Podcasts}
                />
                <Route
                    exact path="/courses"
                    component={Courses}
                />
                <Route
                    exact path="/contact"
                    component={Contact}
                />
                <Route
                    exact path="/blog/post"
                    component={Post}
                />
                <Route
                    exact path="/store/post"
                    component={Product}
                />
                <Route
                    exact path="/podcasts/post"
                    component={Podcast}
                />
                <Route 
                    exact path="/courses/post"
                    component={Course}
                />
                <Route 
                    exact path="/user"
                    component={Profile}
                />
                <Route 
                    exact path="/login"
                    component={Login}
                />
                <Route 
                    exact path="/logout"
                    component={() => {window.sessionStorage.clear(); return <Redirect to='/' />;}}
                />
                <Route
                    path="/error/404"
                    component={NotFound}
                />
                <Redirect to="/error/404" />
            </Switch>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    );
}

export default App;
