import React from 'react';

const LampElement = props => {
    var illuminated = props.illuminated ? 'glow' : '';
    return (
        <div key={props.letter} className='lampboard-letter'>
            <div className={illuminated} >
                {props.letter}
            </div>
        </div>
    )
}

export default LampElement;
