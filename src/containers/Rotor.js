import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Transition from 'react-transition-group/Transition';
import { connect } from 'react-redux';

import RotorWindow from '../components/RotorWindow';
import RotorDnD from '../components/RotorDnD';

import * as scramblerActions from '../actions/scrambler_actions';
import { GREEK_WHEEL, FAST_ROTOR } from '../constants';
import { greekWheelKeys } from '../../enigma/constants';
import { shiftNumber } from '../../enigma/utils';
import ButtonGroup from '../components/ButtonGroup';

class Rotor extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.rotorTurnoverComplete = this.rotorTurnoverComplete.bind(this);
        this.renderRotorSelector = this.renderRotorSelector.bind(this);
        this.state = {
            letter: null,
            inProp: false,
            forwards: true
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.exposedLetter !== prevProps.exposedLetter) {
            this.setState({
                inProp: true,
                forwards: (shiftNumber(prevProps.exposedLetter, this.props.exposedLetter) == 1) // TODO: extract this to a utility function
            });
        }
    }

    componentDidMount() {
        this.setState({ letter: this.props.exposedLetter })
    }

    handleSelect(model) {
        const {setModel, rotorType} = this.props;
        setModel(rotorType, model);
    }

    // Potential refactor: consider making FastRotor and GreekWheel into components
    // that extend from Rotor?

    rotorTurnoverComplete() {
        const { rotorType, enigmaAdvanceSuccess } = this.props;
        if (rotorType === FAST_ROTOR) {
            enigmaAdvanceSuccess();
        }
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
        const { exposedLetter, advanceRotor, reverseRotor, rotorType } = this.props;
        const { inProp, letter, forwards } = this.state;
        return (
            <div className="rotor">
                <div className="rotor-assembly-wrapper">
                    <div className="rotor-turnover-button">
                        <a onClick={() => {advanceRotor(rotorType)}}>
                            <FontAwesome tag="span" size="2x" name="arrow-circle-up" />
                        </a>
                    </div>
                    <Transition
                        timeout={150}
                        in={inProp}
                        onEntered={
                            () => {
                                this.setState({
                                    letter: exposedLetter,
                                    inProp: false
                                }, () => this.rotorTurnoverComplete());
                            }
                        } >
                        {status => (
                            <RotorWindow
                                letter={letter}
                                status={status}
                                forwards={forwards}
                            />
                        )}    
                    </Transition>
                    <div className="rotor-turnover-button">
                        <a onClick={() => {reverseRotor(rotorType)}}>
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

export default connect(mapStateToProps, scramblerActions)(Rotor);
