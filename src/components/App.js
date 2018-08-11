import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HMTL5Backend from 'react-dnd-html5-backend';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../style/index.scss';

import Scrambler from './Scrambler';
import NavBar from './NavBar';
import LampBoard from '../containers/LampBoard';
import WheelBox from '../containers/WheelBox';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="controls-wrapper">
                        <Scrambler />
                        <WheelBox />
                    </div>
                    <NavBar />
                    <Switch>
                        <Route path='/' component={LampBoard} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default DragDropContext(HMTL5Backend)(App);