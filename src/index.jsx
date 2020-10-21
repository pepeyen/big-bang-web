import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';

//Components
import App from './App';

//Styles
import './index.scss';
import './reset.css';

const myStore = createStore(allReducers);

ReactDOM.render(
  <Provider store={myStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();