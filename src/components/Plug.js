import React from 'react';

const Plug = props => {
    let iconClass, divClass;
    if (props.selected) {
        iconClass = "fa-circle-dot";
        divClass = "selected";
    } else {
        iconClass = "fa-circle";
        divClass = "";
    }
    return (
        <div key={props.letter} className={`plugboard-letter ${divClass}`}>
            <div>{props.letter}</div>
            <div><i className={`far ${iconClass}`}></i></div>
        </div>
    );
}

export default Plug;
