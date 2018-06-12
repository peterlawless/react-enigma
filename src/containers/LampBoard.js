import React, { Component } from 'react';
import { connect } from 'react-redux';
import LampElement from '../components/LampElement';

class Lampboard extends Component {
    constructor(props) {
        super(props);
        this.getRowHtml = this.getRowHtml.bind(this);
    }

    getRowHtml(array) {
        const { illuminatedLetter } = this.props;
        return array.map(letter => LampElement({letter, illuminated: (letter === illuminatedLetter)}));
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
    return {
        illuminatedLetter: state.lampboard
    };
}

export default connect(mapStateToProps)(Lampboard);
