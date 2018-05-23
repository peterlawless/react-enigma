import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

var div  = document.createElement('div');
div.id = "app";

document.body.appendChild(div);

ReactDOM.render(<App />, div);
