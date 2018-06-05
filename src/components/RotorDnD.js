import React from 'react';
import RotorDragSource from './RotorDragSource';
import RotorDropTarget from './RotorDropTarget';

export default ({model, handleDrop}) => {
    return (
        <RotorDropTarget handleDrop={({model}) => handleDrop(model)}>
            { model ? <RotorDragSource model={model}/> : null}
        </RotorDropTarget>
    );
}