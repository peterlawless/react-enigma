import React from 'react';

export default props => {
    var illuminated = props.illuminated ? 'glow' : '';
    return (
        <div key={props.letter} className='lampboard-letter'>
            <div className={illuminated} >
                {props.letter}
            </div>
        </div>
    )
}
