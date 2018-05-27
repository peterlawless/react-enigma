import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer);

var div  = document.createElement('div');
div.id = "app";

document.body.appendChild(div);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    div
);
