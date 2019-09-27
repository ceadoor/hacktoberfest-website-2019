// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// common styling
import '../styles/main.scss';

import Home from './index';
import NotFound from './not-found';

const ReactApp = () => {
    return (
        <>
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="" component={NotFound} />
                </Switch>
            </Router>
        </>
    );
};

export default ReactApp;
