import React, { Component } from 'react';
import Rotor from './Rotor';

export default class Scrambler extends Component {
    render() {
        return (
            <div className= "rotors">
                <Rotor />
                <Rotor />
                <Rotor />            
            </div>
        );
    }
}