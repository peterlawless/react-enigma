import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cable from '../components/Cable';

class CableList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cables } = this.props;
        var cablesHtml = [];
        for (var cable in cables) {
            cablesHtml.push(
                Cable({firstLetter: cable, secondLetter: cables[cable]})
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

export default connect(mapStateToProps)(CableList);