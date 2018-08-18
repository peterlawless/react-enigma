import React, { Component } from 'react';
import { connect } from 'react-redux';

import BiMap from 'mnemonist/bi-map';

import Plug from '../components/Plug';
import DisabledPlug from '../components/DisabledPlug';

import { MAX_CABLE_COUNT } from '../constants';

class PlugBoard extends Component {
    constructor(props) {
        super(props);
        this.getRowHtml = this.getRowHtml.bind(this);
        this.letterIsInUse = this.letterIsInUse.bind(this);
        this.addLetter = this.addLetter.bind(this);
        this.removeLetter = this.removeLetter.bind(this);
        this.state = {
            letters: []
        };
    }

    getRowHtml(array) {
        const { plugboard } = this.props;
        return array.map(letter => {
            return this.letterIsInUse(letter) ?
                DisabledPlug({letter, occupied: true}) :
                plugboard.size >= MAX_CABLE_COUNT ?
                    DisabledPlug({letter, occupied: false}) :
                    this.state.letters.indexOf(letter) != -1 ?
                        Plug({letter, selected: true, handleClick: () => {this.removeLetter(letter)}}) :
                        Plug({letter, selected: false, handleClick: () => {this.addLetter(letter)}})
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

    render() {
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

export default connect(mapStateToProps)(PlugBoard);
