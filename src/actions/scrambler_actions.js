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

// this could be refactored, since rotorType and model are both props on the rotor
// and so we might not need to unpack them just to pack them back up again.
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