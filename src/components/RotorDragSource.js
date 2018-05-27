import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from '../constants';

const rotorSource = {
    beginDrag(props, monitor) {
        return { model: props.model };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource()
    };
}

class RotorDragSource extends Component {
    render() {
        const { connectDragSource } = this.props;
        return connectDragSource(
            <div className="rotor-drag-source">
                {this.props.model}
            </div>
        );
    }
}

export default DragSource(ItemTypes.ROTOR, rotorSource, collect)(RotorDragSource);
