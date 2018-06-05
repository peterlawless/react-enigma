import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setReflectorModel } from '../actions/rotor_actions';
import ButtonGroup from '../components/ButtonGroup';
import { reflectorKeys } from '../../enigma/constants';
import { REFLECTOR } from '../constants';

class Reflector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { setReflectorModel, model } = this.props;
        return <ButtonGroup
                model={model}
                models={reflectorKeys}
                handleClick={setReflectorModel}
                />;
    }
}

function mapStateToProps(state) {
    return {
        model: state.rotors[REFLECTOR]
    }
}

export default connect(mapStateToProps, {setReflectorModel})(Reflector);
