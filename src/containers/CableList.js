import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cable from '../components/Cable';

import { removeCable } from '../actions/plugboard_actions';

class CableList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cables, removeCable } = this.props;
        var cablesHtml = [];
        for (var cable in cables) {
            cablesHtml.push(
                Cable({
                    firstLetter: cable,
                    secondLetter: cables[cable],
                    handleClick: removeCable
                })
            );
        }
        return (
            <div className="cables">
                { [...cablesHtml] }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cables: state.plugboard
    }
}

export default connect(mapStateToProps, { removeCable })(CableList);
