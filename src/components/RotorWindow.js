import React from 'react';

import { alphabetLoopIncrement, alphabetLoopDecrement } from '../../enigma/utils';

export default props => {
    if( props.status == 'entering') {
        var appliedAnimation = props.forwards ? 'slide-forward' : 'slide-backward'
    }
    return (
        <div className="rotor-window">
            <div className="rotor-window-overlay"></div>            
            <div className={'rotor-wheel ' + appliedAnimation}>
                <div className="rotor-letter">
                    {alphabetLoopDecrement(props.letter)}
                </div>                            
                <div className="rotor-letter">
                    {props.letter}
                </div>
                <div className="rotor-letter">
                    {alphabetLoopIncrement(props.letter)}
                </div>
            </div>
        </div>
    );
};
    