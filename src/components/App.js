import React, {Component} from 'react';

import { DragDropContext } from 'react-dnd';
import HMTL5Backend from 'react-dnd-html5-backend';

import '../style/index.scss';

import Rotor from './Rotor';
import LampBoard from './LampBoard';

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

export default DragDropContext(HMTL5Backend)(App);