import React, { Component } from 'react';
import { connect } from 'react-redux';

import RotorDnD from '../components/RotorDnD';

import { rotorKeys } from '../../enigma/constants';

class WheelBox extends Component {
    componentDidMount() {

    }

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
            </header>
        );
    }
}

function mapStateToProps({rotors}) {
    const rotorsInUse = []
    for ( const rotor in rotors) {
        rotorsInUse.push(rotors[rotor].model);
    }
    return { rotorsInUse };
}

export default connect(mapStateToProps, null)(WheelBox);