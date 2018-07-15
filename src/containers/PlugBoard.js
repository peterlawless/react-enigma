import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CABLE_COUNT_MAX } from '../constants';

class PlugBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cableCount: 0,
            valid: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        console.log("Click!")
    }

    render() {
        return (
            <div>
                This is the plugboard!
                <div className="plugboard-cables-wrapper">
                </div>
                <div className="plugboard-button-wrapper">
                    <div className="plugboard-button" onClick={this.handleClick}>
                        <i className="fa fa-plus fa-2x"/>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        plugboard: state.plugboard
    }
}

export default connect(mapStateToProps, {})(PlugBoard);
