import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Components
import Footer from './components/Footer';

//Views
import Home from './views/home';
import Blog from './views/blog';
import Post from './views/post';
import Store from './views/store';
import Product from './views/product';
import Podcasts from './views/podcasts';
import Podcast from './views/podcast';
import Courses from './views/courses';
import Course from './views/course';
import Contact from './views/contact';
import NotFound from './views/errors/404';

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
