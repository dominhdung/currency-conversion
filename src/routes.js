import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout/Layout';
import CurrencyConverterContainer from './containers/CurrencyConverterContainer';
import About from './components/About/About'

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={CurrencyConverterContainer} />
        <Route path="about" component={About} />
        <Route path="converter" component={CurrencyConverterContainer} />
    </Route>
);

export default routes;

