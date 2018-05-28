import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

import RotorWindow from '../components/RotorWindow';

import * as rotorActions from '../actions/rotor_actions';
import RotorDnD from '../components/RotorDnD';


class Rotor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 25,
            in: false,
            forwards: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleClick(e) {
        this.setState({
            in: true
        });
    }

    handleDrop({model}) {
        const {setModel, rotorType} = this.props;
        setModel(rotorType, model);
    }

    renderDragSource() {
        return this.props.model ? <RotorDragSource model={this.props.model} /> : null;
    }

    render() {
        return (
            <div className="rotor">
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
                <RotorDnD handleDrop={this.handleDrop} model={this.props.model}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return state.rotors[ownProps.rotorType];
}

export default connect(mapStateToProps, rotorActions)(Rotor);
