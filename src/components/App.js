import React, {Component} from 'react';

import { DragDropContext } from 'react-dnd';
import HMTL5Backend from 'react-dnd-html5-backend';

import '../style/index.scss';

import Scrambler from './Scrambler';
import LampBoard from './LampBoard';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Scrambler />
                <LampBoard />
            </div>
        );
    }
}

export default DragDropContext(HMTL5Backend)(App);