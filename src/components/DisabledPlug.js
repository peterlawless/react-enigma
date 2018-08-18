import React from 'react';

const DisabledPlug = props => {
    const icon = props.occupied ? "fa-dot-circle" : "fa-circle";
    return (
        <div key={props.letter} className='plugboard-letter occupied'>
            <div>{props.letter}</div>
            <div><i className={`far {icon}`}></i></div>
        </div>
    );
}

export default DisabledPlug;
