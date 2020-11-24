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
import './assets/sass/main.scss';

const myStore = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={myStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();