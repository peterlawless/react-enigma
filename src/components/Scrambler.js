import React, { Component } from 'react';
import Rotor from '../containers/Rotor';
import { RotorTypes } from '../constants';

export default class Scrambler extends Component {
    render() {
        return (
            <div className= "rotors">
                <Rotor rotorType={RotorTypes.SLOW_ROTOR} />
                <Rotor rotorType={RotorTypes.CENTER_ROTOR} />
                <Rotor rotorType={RotorTypes.FAST_ROTOR} />            
            </div>
        );
    }
}