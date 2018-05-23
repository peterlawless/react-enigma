import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../constants';


const rotorSource = {

};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource()
    };
}

class RotorDragSource extends Component {
    render() {
        return connectDragSource(
            <div className="rotor-drag-source">
                {this.props.children}
            </div>
        );
    }
}

export default DragSource(ItemTypes.ROTOR, rotorSource, collect)(RotorDragSource);
