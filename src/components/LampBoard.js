import React, { Component } from 'react';
import LampElement from './LampElement';

export default class Lampboard extends Component {
    constructor(props) {
        super(props);
        this.getRowHtml = this.getRowHtml.bind(this);
    }

    getRowHtml(array) {
        return array.map(letter => LampElement({letter}));
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
