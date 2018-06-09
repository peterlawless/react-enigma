import { RotorActionTypes } from '../constants';

export function advanceRotor(rotorType) {
    return {
        type: RotorActionTypes.ADVANCE,
        payload: rotorType
    };
}

export function reverseRotor(rotorType) {
    return {
        type: RotorActionTypes.REVERSE,
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

export function enigmaButtonDepress(letter) {
    return {
        type: RotorActionTypes.ENIGMA_BUTTON_DEPRESS,
        payload: letter
    };
}