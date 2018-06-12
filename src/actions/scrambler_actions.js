import { RotorActionTypes } from '../constants';

export function advanceRotor(rotorType) {
    return {
        type: RotorActionTypes.ROTOR_ADVANCE,
        payload: rotorType
    };
}

export function reverseRotor(rotorType) {
    return {
        type: RotorActionTypes.ROTOR_REVERSE,
        payload: rotorType
    };
}

export function setModel(rotorType, model) {
    return {
        type: RotorActionTypes.SET_ROTOR_MODEL,
        payload: { rotorType, model }
    };
}

export function setReflectorModel(model) {
    return {
        type: RotorActionTypes.SET_REFLECTOR_MODEL,
        payload: model
    };
}

export function enigmaAdvance() {
    return {
        type: RotorActionTypes.ENIGMA_ADVANCE,
    };
}