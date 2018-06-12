import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

// Middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import enigmaMiddleware from './middlewares/enigma';

import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(
    thunk,
    enigmaMiddleware,
    logger
));

var div  = document.createElement('div');
div.id = "app";

document.body.appendChild(div);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    div
);
