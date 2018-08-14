import React from 'react';

const OccupiedPlug = props => {
    return (
        <div key={props.letter} className='plugboard-letter occupied'>
            <div>{props.letter}</div>
            <div><i className='far fa-dot-circle'></i></div>
        </div>
    );
}

export default OccupiedPlug;
