import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './style/index.scss';

import Rotor from './components/Rotor';
import LampBoard from './components/LampBoard';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className= "rotors">
                    <Rotor />
                    <Rotor />
                    <Rotor />            
                </div>
                <LampBoard />
            </div>
        );
    }
}

var div  = document.createElement('div');
div.id = "app";

document.body.appendChild(div);

ReactDOM.render(<App />, div);
