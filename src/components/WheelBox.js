import React, { Component } from 'react';

import RotorDropTarget from './RotorDropTarget';
import RotorDragSource from './RotorDragSource';

import { rotorKeys } from '../../enigma/constants';

export default class WheelBox extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <header className="header">
                {rotorKeys.map(model => {
                    return (
                        <RotorDropTarget key={model}>
                            <RotorDragSource model={model} />
                        </RotorDropTarget>
                    );
                })}
            </header>
        );
    }
}