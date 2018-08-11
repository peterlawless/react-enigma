import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CABLE_COUNT_MAX } from '../constants';
import PlugBoardCable from '../components/PlugBoardCable';

class PlugBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
        this.getCables = this.getCables.bind(this);
        this.addCable = this.addCable.bind(this);
    }

    getCables() {
        const { plugboard } = this.props;
        var cables = []
        for (var cable in plugboard) {
            cables.append(<PlugBoardCable key={cable} value={plugboard[cable]} />);
        }
        return cables;
    }

    addCable() {
        
    }

    render() {
        const cableCount = Object.keys(this.props.plugboard).length;
        return (
            <div>
                This is the plugboard!
                <div className="plugboard-cables-wrapper">
                    {this.getCables()}
                </div>
                <button 
                    onClick={this.addCable}
                    disabled={this.state.editing || cableCount < CABLE_COUNT_MAX}
                >
                    Add Cable
                </button>
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
