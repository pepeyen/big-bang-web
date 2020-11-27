import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

//Components
import {
    Navbar,
    Footer
} from './components';

//Views
import {
    Cart,
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
    NotFound,
    Wishlist
} from './views';

const App = () => {
    return (
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route
                        exact path="/"
                        component={() => {return <Redirect to="home" />;}}
                    />
                    <Route
                        exact path="/home"
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
                        path="/user"
                        component={Profile}
                    />
                    <Route 
                        exact path="/login"
                        component={Login}
                    />
                    <Route
                        exact path="/cart"
                        component={Cart}
                    />
                    <Route 
                        exact path="/logout"
                        component={() => {window.sessionStorage.clear(); return <Redirect to='/' />;}}
                    />
                    <Route
                        exact path="/wishlist"
                        component={Wishlist}
                    />
                    <Route
                        path="/error/404"
                        component={NotFound}
                    />
                    <Redirect to="/error/404" />
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    );
}

export default App;
