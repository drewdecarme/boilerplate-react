import 'babel-polyfill';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { IntlProvider } from 'react-intl';
import React from 'react';

import Home from './app/containers/Home';
import configureStore from './index.store';

import './index.scss';

require('./assets/icons/favicon.png');

const store = configureStore();
const locale = 'en';

render(
  <IntlProvider locale={ locale }>
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ Home } />
      </Router>
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
);
