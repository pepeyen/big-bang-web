import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Views
import Inicio from './views/inicio';
import Blog from './views/blog';
import Loja from './views/loja';
import Podcasts from './views/podcasts';
import Cursos from './views/cursos';
import Contato from './views/contato';
import Produto from './views/produto';

//Styles
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/loja" component={Loja} />
          <Route exact path="/podcasts" component={Podcasts} />
          <Route exact path="/cursos" component={Cursos} />
          <Route exact path="/contato" component={Contato} />
          <Route exact path="/loja/produto/:currentProductId" component={Produto} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
