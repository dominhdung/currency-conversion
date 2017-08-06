import React from 'react';
import { render } from 'react-dom';
//import './assets/stylesheets/base.scss';

import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';

import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
    <AppContainer store={store} history={history} />,
    document.getElementById('root'),
);
