import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class PlugBoardCable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                This is a plugboard cable!
            </div>
        );
    }
}
