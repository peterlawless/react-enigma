import React, { Component } from 'react';
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
            <div>
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
                <button onClick={() => this.setState({in: true, forwards: true})}>Forwards</button>
                <button onClick={() => this.setState({in: true, forwards: false})}>Backwards</button>                
            </div>
        );
    }
}