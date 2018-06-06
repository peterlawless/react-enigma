import React, { Component } from 'react';
import Rotor from '../containers/Rotor';
import Reflector from '../containers/Reflector';
import {
    RotorActionTypes,
    GREEK_WHEEL,
    SLOW_ROTOR,
    CENTER_ROTOR,
    FAST_ROTOR
} from '../constants';

export default class Scrambler extends Component {
    render() {
        return (
            <div className= "scrambler">
                <Reflector />
                <Rotor rotorType={GREEK_WHEEL} />
                <Rotor rotorType={SLOW_ROTOR} />
                <Rotor rotorType={CENTER_ROTOR} />
                <Rotor rotorType={FAST_ROTOR} />            
            </div>
        );
    }
}