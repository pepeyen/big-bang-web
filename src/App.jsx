import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Views
import Inicio from './views/inicio';
import Blog from './views/blog';
import Loja from './views/loja';
import Podcasts from './views/podcasts';
import Cursos from './views/cursos';
import Contato from './views/contato';

//Styles
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/inicio" component={Inicio} />
          <Route path="/blog" component={Blog} />
          <Route path="/loja" component={Loja} />
          <Route path="/podcasts" component={Podcasts} />
          <Route path="/cursos" component={Cursos} />
          <Route path="/contato" component={Contato} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
