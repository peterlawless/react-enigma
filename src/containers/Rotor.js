import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

import RotorWindow from '../components/RotorWindow';
import RotorDnD from '../components/RotorDnD';

import * as rotorActions from '../actions/scrambler_actions';
import { GREEK_WHEEL } from '../constants';
import { greekWheelKeys } from '../../enigma/constants';
import ButtonGroup from '../components/ButtonGroup';

class Rotor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 25,
            in: false,
            forwards: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.renderRotorSelector = this.renderRotorSelector.bind(this);
    }

    handleClick(e) {
        this.setState({
            in: true
        });
    }

    handleSelect(model) {
        const {setModel, rotorType} = this.props;
        setModel(rotorType, model);
    }

    renderRotorSelector() {
        const { model } = this.props;
        return this.props.rotorType === GREEK_WHEEL ?
            <ButtonGroup
                handleClick={this.handleSelect}
                models={greekWheelKeys}
                model={model}
            /> :
            <RotorDnD handleDrop={this.handleSelect} model={model}/>;
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
                {this.renderRotorSelector()}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return state.scrambler[ownProps.rotorType];
}

export default connect(mapStateToProps, rotorActions)(Rotor);
