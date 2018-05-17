import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Transition from 'react-transition-group/Transition';

import RotorWindow from './RotorWindow';

export default class Rotor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 25,
            in: false,
            forwards: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            in: true
        });
    }

    render() {
        return (
            <div className="rotor-assembly-wrapper">
                <div className="rotor-turnover-button">
                    <a onClick={() => this.setState({in: true, forwards: false})}>
                        <FontAwesome tag="span" size="2x" name="arrow-circle-up" />
                    </a>
                </div>
                <Transition
                    timeout={150}
                    in={this.state.in}
                    onEntered={() => {
                        var direction = this.state.forwards ? 1 : -1;
                        this.setState({number: (this.state.number + direction + 26) % 26, in: false});
                        }} >
                    {status => (
                        <RotorWindow status={status} number={this.state.number} forwards={this.state.forwards} />
                    )}    
                </Transition>
                <div className="rotor-turnover-button">
                    <a onClick={() => this.setState({in: true, forwards: true})}>
                        <FontAwesome tag="span" size="2x" name="arrow-circle-down" />
                    </a>   
                </div>         
            </div>
        );
    }
}