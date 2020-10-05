import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Views
import Home from './views/home';
import Blog from './views/blog';
import Store from './views/store';
import Podcasts from './views/podcasts';
import Courses from './views/courses';
import Contact from './views/contact';
import Post from './views/post';
import Product from './views/product';
import NotFound from './views/errors/404';
import Podcast from './views/podcast';

//Styles
import './App.scss';
import './views/_page.scss';

function App() {
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
            exact path="/store/product" 
            component={Product} 
          />
          <Route 
            exact path="/podcasts/podcast" 
            component={Podcast} 
          />
          <Route
            path="/error/404"
            component={NotFound}
          />
          <Redirect to="/error/404" />
      </Switch>
    </React.Fragment>
  );
}

export default App;