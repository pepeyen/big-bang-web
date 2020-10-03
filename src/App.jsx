import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Views
import Inicio from './views/inicio';
import Blog from './views/blog';
import Loja from './views/loja';
import Podcasts from './views/podcasts';
import Cursos from './views/cursos';
import Contato from './views/contato';
import Post from './views/post';
import Produto from './views/produto';
import NotFound from './views/notFound';

//Styles
import './App.scss';
import './views/_page.scss';

function App() {
  return (
    <React.Fragment>
      <Switch>
          <Route 
            exact path="/" 
            component={Inicio} 
          />
          <Route 
            exact path="/blog" 
            component={Blog} 
          />
          <Route 
            exact path="/loja" 
            component={Loja} 
          />
          <Route 
            exact path="/podcasts" 
            component={Podcasts} 
          />
          <Route 
            exact path="/cursos" 
            component={Cursos}
          />
          <Route 
            exact path="/contato" 
            component={Contato} 
          />
          <Route 
            exact path="/blog/post" 
            component={Post} 
          />          
          <Route 
            exact path="/loja/produto" 
            component={Produto} 
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
