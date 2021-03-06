import React, { Component } from 'react';
import { connect } from 'react-redux';

import BiMap from 'mnemonist/bi-map';

import Plug from '../components/Plug';
import DisabledPlug from '../components/DisabledPlug';

import { addCable } from '../actions/plugboard_actions';

import { MAX_CABLE_COUNT } from '../constants';

class PlugBoard extends Component {
    constructor(props) {
        super(props);
        this.getRowHtml = this.getRowHtml.bind(this);
        this.letterIsInUse = this.letterIsInUse.bind(this);
        this.addLetter = this.addLetter.bind(this);
        this.removeLetter = this.removeLetter.bind(this);
        this.connectCable = this.connectCable.bind(this);
        this.state = {
            letters: []
        };
    }

    getRowHtml(array) {
        const { letters } = this.state;
        return array.map(letter => {
            if (this.letterIsInUse(letter)) {
                return DisabledPlug({letter, occupied: true});
            } else if (letters.indexOf(letter) != -1) {
                return Plug({letter, selected: true, handleClick: () => {this.removeLetter(letter)}});
            } else {
                return (letters.length >= 2) ? 
                    DisabledPlug({letter, occupied: false}) :
                    Plug({letter, selected: false, handleClick: () => {this.addLetter(letter)}});
            }
        });
    }

    letterIsInUse(letter) {
        const { plugboard } = this.props;
        return plugboard.has(letter) || plugboard.inverse.has(letter);
    }

    addLetter(letter) {
        this.setState({
            letters: [...this.state.letters, letter]
        })
    }

    removeLetter(letter) {
        this.setState({
            letters: this.state.letters.filter(l => l !== letter)
        })
    }

    connectCable() {
        this.props.addCable(this.state.letters);
        this.setState({letters: []});
    }

    render() {
        const letterCount = this.state.letters.length;
        return (
            <div className="lampboard">
                <div className="lampboard-row">
                    {this.getRowHtml(['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O'])}
                </div>
                <div className="lampboard-row">
                    {this.getRowHtml(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K'])}
                </div>
                <div className="lampboard-row">
                    {this.getRowHtml(['P', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'L'])}
                </div>
                <div className="lampboard-row">
                    <button disabled={letterCount < 2}
                            onClick={this.connectCable}>
                        Add Cable
                    </button>
                    <button disabled={letterCount == 0}
                            onClick={() => this.setState({letters: []})} >
                        Clear Current Selection
                    </button>
                </div>
            </div>
        );
    }
}

// note: both this component and the enigma "backend"
// are wrapping a plain object "plugboard" in a BiMap object.
// There may be an opportunity to refactor this so the app
// refers to the plugboard as a BiMap ONLY.
function mapStateToProps(state) {
    return {
        plugboard: BiMap.from(state.plugboard)
    };
}

export default connect(mapStateToProps, { addCable })(PlugBoard);
