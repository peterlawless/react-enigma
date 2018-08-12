import React from 'react';

const Plug = props => {
    return (
        <div key={props.letter} className="plugboard-letter">
            <div>{props.letter}</div>
            <div><i className="far fa-dot-circle"></i></div>
        </div>
    );
}

export default Plug;
