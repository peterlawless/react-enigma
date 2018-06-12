import React, { Component } from 'react';
import { connect } from 'react-redux';

import RotorDnD from '../components/RotorDnD';

import { rotorKeys } from '../../enigma/constants';
import { SLOW_ROTOR, CENTER_ROTOR, FAST_ROTOR } from '../constants';
import { enigmaButtonDepress } from '../actions/enigma_actions';

class WheelBox extends Component {
    render() {
        const { rotorsInUse } = this.props;
        return (
            <header className="header">
                {rotorKeys.map(model => {
                    const availableModel = rotorsInUse.includes(model) ? false : model;
                    return (
                        <RotorDnD model={availableModel} key={model} handleDrop={() => {}}/>
                    );
                })}
                <button onClick={() => this.props.enigmaButtonDepress('E')}>Click me</button>
            </header>
        );
    }
}

function mapStateToProps({scrambler}) {
    const rotorsInUse = []
    for ( const rotor in scrambler) {
        rotorsInUse.push(scrambler[rotor].model);
    }
    return { rotorsInUse };
}

export default connect(mapStateToProps, { enigmaButtonDepress })(WheelBox);