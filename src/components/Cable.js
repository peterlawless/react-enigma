import React from 'react';

const Cable = props => {
    return (
        <div key={props.firstLetter} className="cable">
            { props.firstLetter }
            <i className="fas fa-arrows-alt-h"></i>
            { props.secondLetter}
            <div className="divider"></div>
            <i className="fas fa-times" onClick={props.handleClick}></i>
        </div>
    );
}

export default Cable;