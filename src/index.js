import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './style/index.scss';

import Rotor from './components/Rotor';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className= "rotors">
                <Rotor />
                <Rotor />
                <Rotor />            
            </div>
        );
    }
}

var div  = document.createElement('div');
div.id = "app";

document.body.appendChild(div);

ReactDOM.render(<App />, div);
