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
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class RotorDragSource extends Component {
    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div className="rotor-drag-source"
            style={{opacity: isDragging ? 0 : 1 
            }}>
                <span>{this.props.model}</span>
            </div>
        );
    }
}

export default DragSource(ItemTypes.ROTOR, rotorSource, collect)(RotorDragSource);
