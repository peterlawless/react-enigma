import React from 'react';

import { alphabetBiMap } from '../../enigma/constants';

export default props => {
    if( props.status == 'entering') {
        var appliedAnimation = props.forwards ? 'slide-forward' : 'slide-backward'
    }
    return (
        <div className="rotor-window">
            <div className={'rotor ' + appliedAnimation}>
                <div className="rotor-letter">
                    {alphabetBiMap.inverse.get((props.number + 25) % 26)}
                </div>                            
                <div className="rotor-letter">
                    {alphabetBiMap.inverse.get(props.number)}
                </div>
                <div className="rotor-letter">
                    {alphabetBiMap.inverse.get((props.number + 1) % 26)}
                </div>
            </div>
        </div>
    );
};
    