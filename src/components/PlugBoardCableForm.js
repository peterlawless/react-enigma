import React, { Component } from 'react';

export default class PlugBoardCableForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <select></select>
                <select></select>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        );
    }
}