import React, { Component } from 'react';
import { connect } from 'react-redux';

import RotorDropTarget from '../components/RotorDropTarget';
import RotorDragSource from '../components/RotorDragSource';

import { rotorKeys } from '../../enigma/constants';

class WheelBox extends Component {
    componentDidMount() {

    }

    render() {
        const { rotorsInUse } = this.props;
        return (
            <header className="header">
                {rotorKeys.map(model => {
                    const rotorDragSource = rotorsInUse.includes(model) ? null : <RotorDragSource model={model} />
                    return (
                        <RotorDropTarget key={model}>
                            {rotorDragSource}
                        </RotorDropTarget>
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