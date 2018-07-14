import {
    ENIGMA_ADVANCE_SUCCESS,
    SET_REFLECTOR_MODEL,
    SET_ROTOR_MODEL,
    ROTOR_ADVANCE,
    ROTOR_REVERSE 
} from '../constants';

export function advanceRotor(rotorType) {
    return {
        type: ROTOR_ADVANCE,
        payload: rotorType
    };
}

export function reverseRotor(rotorType) {
    return {
        type: ROTOR_REVERSE,
        payload: rotorType
    };
}

export function setModel(rotorType, model) {
    return {
        type: SET_ROTOR_MODEL,
        payload: { rotorType, model }
    };
}

export function setReflectorModel(model) {
    return {
        type: SET_REFLECTOR_MODEL,
        payload: model
    };
}

export function enigmaAdvanceSuccess() {
    return { type: ENIGMA_ADVANCE_SUCCESS };
}
