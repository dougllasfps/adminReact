import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

import 'babel-polyfill';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import promisse from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const appStore = applyMiddleware( promisse, thunk, multi)(createStore)(reducers, devTools);

const Main = (props) => (
    <HashRouter>
        <ScrollToTop>
            <App></App>
        </ScrollToTop>
    </HashRouter>
)

ReactDOM.render(
    <Provider store={appStore}>
        <Main />
    </Provider>,
    document.getElementById('root')
);

