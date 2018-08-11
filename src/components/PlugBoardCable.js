import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class PlugBoardCable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { key, value } = this.props;
        return (
            <div>
                <div>{key}</div>
                <div>{value}</div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        );
    }
}
