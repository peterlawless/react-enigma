import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import { ItemTypes } from '../constants';

const rotorTarget = {
    drop(props, monitor) {
        // call action to modify redux store
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class RotorDropTarget extends Component {
    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div className="rotor-drop-target">
                {this.props.children}
            </div>
        );
    }
}

export default DropTarget(ItemTypes.ROTOR, rotorTarget, collect)(RotorDropTarget);
