import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { RootCmp } from './RootCmp';
import './assets/styles/styles.scss';

ReactDOM.render(
  <React.StrictMode enabled={false}>
    <Provider store={store}>
      <Router>
        <RootCmp />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

