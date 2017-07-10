import 'babel-polyfill';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { IntlProvider } from 'react-intl';
import React from 'react';
import Cookie from 'js-cookie';

import App from './app/containers/App';
import configureStore from './app/store/configureStore';

import './index.scss';

require('./assets/icons/favicon.png');

const store = configureStore();
const locale = Cookie.get('locale') || 'en';

render(
  <IntlProvider locale={ locale }>
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ App } />
      </Router>
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
);
