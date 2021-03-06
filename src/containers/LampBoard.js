import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enigmaButtonRelease, enigmaButtonDepress } from '../actions/enigma_actions';
import { isSingleLetter } from '../../enigma/utils';
import LampElement from '../components/LampElement';

class Lampboard extends Component {
    constructor(props) {
        super(props);
        this.getRowHtml = this.getRowHtml.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentWillMount() {
        document.addEventListener('keypress', this.handleKeyPress);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
        document.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyPress(e) {
        const { enigmaButtonDepress, plainLetter } = this.props;
        const keyPressed = e.key.toUpperCase();
        if (!e.repeat && isSingleLetter(keyPressed) && !plainLetter) {
            enigmaButtonDepress(keyPressed);
        }
    }

    handleKeyUp(e) {
        const { plainLetter, enigmaButtonRelease } = this.props;
        if (e.key.toUpperCase() == plainLetter) {
            this.props.enigmaButtonRelease();
        }
    }

    getRowHtml(array) {
        const { cipherLetter } = this.props;
        return array.map(letter => LampElement({letter, illuminated: (letter === cipherLetter)}));
    }

    render() {
        return(
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

function mapStateToProps(state) {
    return { ...state.lampboard };
}

export default connect(mapStateToProps, {enigmaButtonDepress, enigmaButtonRelease})(Lampboard);
